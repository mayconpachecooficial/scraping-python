# Projeto de Download e Substituição de Arquivos de Domínios

Desenvolvi esse projeto realiza o download de arquivos HTML, CSS, imagens e scripts de domínios especificados em arquivos CSV e os substitui por arquivos locais.

## Estrutura do Projeto


Aqui está um arquivo README.md detalhado que inclui um tutorial de instalação e uma explicação sobre o que foi feito no projeto.

README.md
markdown
Copiar código
# Projeto de Download e Substituição de Arquivos de Domínios

Este projeto realiza o download de arquivos HTML, CSS, imagens e scripts de domínios especificados em arquivos CSV e os substitui por arquivos locais.

## Estrutura do Projeto

scraping-python/
│
├── data/
│ ├── file1.csv
│ └── file2.csv
│
├── downloads/
│ 
│ 
│ 
│ 
│ 
│ 
│
├── scripts/
│ └── download_script.py
│
├── venv/
│ └── ... # Ambiente virtual (criado automaticamente)
│
├── requirements.txt
├── README.md



## Tutorial de Instalação

### Pré-requisitos

Certifique-se de ter o Python instalado em seu sistema. Você pode baixar e instalar o Python a partir do [site oficial](https://www.python.org/downloads/).

### Passos para Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/scraping-python.git
    ```

2. **Crie um ambiente virtual e ative-o:**

    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux e MacOS
    .\venv\Scripts\activate   # Windows
    ```

3. **Instale as dependências:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Preencha os arquivos CSV na pasta `data/` com os domínios que você deseja processar. Cada CSV deve conter uma coluna `domain` com os URLs dos domínios.**

### Executando o Script

1. **Certifique-se de que você tem arquivos CSV na pasta `data/` contendo os domínios que você deseja processar.**

2. **Execute o script:**

    ```bash
    cd scripts
    python download_script.py
    ```

### Estrutura do `.gitignore`

Adicione o seguinte conteúdo ao arquivo `.gitignore` para garantir que arquivos desnecessários não sejam incluídos no controle de versão:

venv/
pycache/
*.pyc
downloads/


## Explicação do Projeto

Este projeto foi criado para automatizar o processo de download e substituição de arquivos em páginas web. Abaixo está uma explicação detalhada do que cada parte do projeto faz:

1. **Ler Domínios a partir de Arquivos CSV:**
    - O script lê todos os arquivos CSV na pasta `data/` e extrai os domínios especificados na coluna `domain`.

2. **Acessar e Processar Cada Domínio:**
    - Para cada domínio, o script faz uma requisição HTTP e baixa o conteúdo da página inicial.
    - Os links para arquivos CSS, imagens e scripts são substituídos por versões baixadas localmente.

3. **Download e Substituição de Arquivos:**
    - Os arquivos CSS, imagens e scripts são baixados e salvos em diretórios específicos dentro da pasta `downloads/`.
    - Os links nos arquivos HTML são atualizados para apontar para os arquivos locais.

4. **Acessar a Página 2 do Domínio:**
    - O script acessa a segunda página de cada domínio (assumindo a URL `domain/page/2`) e exporta o conteúdo para um arquivo HTML local.

## Arquivo `requirements.txt`

O arquivo `requirements.txt` contém as dependências do projeto:

pandas
requests
beautifulsoup4


## Suporte

Se você encontrar algum problema ou tiver alguma dúvida, sinta-se à vontade para abrir uma issue no repositório ou enviar um pull request com melhorias.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork do projeto e enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
