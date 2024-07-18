import os
import time
import random
import pandas as pd
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from pathlib import Path
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

# Função para inicializar o Selenium WebDriver
def init_driver():
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Executar o navegador em modo headless
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
    
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=chrome_options)
    return driver

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
def process_domain(domain, download_directory, driver):
    # Acessar o domínio
    driver.get(domain)
    time.sleep(random.uniform(2, 5))  # Aguardar de forma aleatória para imitar comportamento humano
    page_source = driver.page_source
    soup = BeautifulSoup(page_source, 'html.parser')

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
    driver.get(page_2_url)
    time.sleep(random.uniform(2, 5))  # Aguardar de forma aleatória para imitar comportamento humano
    page_2_source = driver.page_source
    page_2_soup = BeautifulSoup(page_2_source, 'html.parser')
    
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
    driver = init_driver()  # Inicializar o driver Selenium
    try:
        # Processar cada domínio
        for domain in domains:
            domain_name = urlparse(domain).netloc
            download_directory = os.path.join('../downloads', domain_name)
            process_domain(domain, download_directory, driver)
    finally:
        driver.quit()  # Garantir que o driver seja fechado
    print("Processamento concluído!")
