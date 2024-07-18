import os
import pandas as pd
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from pathlib import Path

# Função para fazer o download de um arquivo
def download_file(url, base_directory, subdirectory):
    local_directory = os.path.join(base_directory, subdirectory)
    os.makedirs(local_directory, exist_ok=True)
    
    local_filename = os.path.join(local_directory, os.path.basename(urlparse(url).path))
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(local_filename, 'wb') as f:
            for chunk in response.iter_content(1024):
                f.write(chunk)
    return local_filename

# Função para substituir os links por arquivos locais
def replace_links(soup, tag, attribute, base_url, base_directory):
    for element in soup.find_all(tag):
        if attribute in element.attrs:
            file_url = urljoin(base_url, element[attribute])
            if tag == 'link' and 'stylesheet' in element.attrs.get('rel', []):
                subdirectory = 'css'
            elif tag == 'img':
                subdirectory = 'images'
            elif tag == 'script':
                subdirectory = 'scripts'
            else:
                subdirectory = ''
            
            if subdirectory:
                local_file = download_file(file_url, base_directory, subdirectory)
                element[attribute] = os.path.relpath(local_file, base_directory)

# Função principal para processar o domínio
def process_domain(domain, download_directory):
    # Acessar o domínio
    response = requests.get(domain)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Baixar e substituir arquivos CSS, imagens e scripts
    replace_links(soup, 'link', 'href', domain, download_directory)
    replace_links(soup, 'img', 'src', domain, download_directory)
    replace_links(soup, 'script', 'src', domain, download_directory)
    
    # Salvar a página HTML modificada
    os.makedirs(download_directory, exist_ok=True)
    with open(os.path.join(download_directory, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(str(soup))

    # Acessar a página 2 do domínio
    page_2_url = urljoin(domain, 'page/2')
    response = requests.get(page_2_url)
    page_2_soup = BeautifulSoup(response.content, 'html.parser')
    
    # Exportar o conteúdo da página 2 para um arquivo
    with open(os.path.join(download_directory, 'page_2.html'), 'w', encoding='utf-8') as f:
        f.write(str(page_2_soup))

# Carregar todos os arquivos CSV e ler os domínios
csv_files = [file for file in Path('../data').glob('*.csv')]
domains = []

for csv_file in csv_files:
    print(f"Processing file: {csv_file}")
    try:
        df = pd.read_csv(csv_file)
        if 'domain' in df.columns:
            domains.extend(df['domain'].dropna().tolist())
        else:
            print(f"No 'domain' column in {csv_file}")
    except pd.errors.EmptyDataError:
        print(f"Empty or malformed CSV file: {csv_file}")
    except Exception as e:
        print(f"Error processing {csv_file}: {e}")

# Verificar se temos domínios para processar
if not domains:
    print("No domains to process. Please check the CSV files.")
else:
    # Processar cada domínio
    for domain in domains:
        domain_name = urlparse(domain).netloc
        download_directory = os.path.join('../downloads', domain_name)
        process_domain(domain, download_directory)

print("Processamento concluído!")
