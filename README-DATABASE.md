🌟 Manual Completo - Instalação do Ambiente Backend (WSL + Docker + PostgreSQL 17)

✅ Requisitos

Windows 10 ou superior

Executar PowerShell como Administrador

🚀 1️⃣ Instalando WSL (Windows Subsystem for Linux)

Execute no PowerShell:

wsl --install

Defina o WSL 2 como padrão:

wsl --set-default-version 2

Liste distribuições disponíveis:

wsl --list --online

Instale a distribuição Ubuntu:

wsl --install -d Ubuntu

👉 Reinicie o computador após a instalação!

🐳 2️⃣ Instalando Docker Desktop via PowerShell

Baixe e instale:

Invoke-WebRequest -Uri "https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe" -OutFile "DockerDesktopInstaller.exe"
Start-Process -Wait -FilePath ".\DockerDesktopInstaller.exe" -ArgumentList "install", "--quiet"

Após instalado, abra o Docker Desktop e habilite a integração com WSL 2.

🐘 3️⃣ Instalando PostgreSQL 17 via Docker

Crie e inicie um container PostgreSQL:

docker run --name postgres17 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:17

🌐 4️⃣ Testando Acesso Externo ao PostgreSQL

Com o container rodando, conecte ao banco:

psql -h 127.0.0.1 -U postgres -p 5432

As credenciais padrão:

User: postgres

Password: postgres

📄 Estrutura do Ambiente Final

📁 Windows
 └🐧 Ubuntu WSL
       └🐳 Docker
             └🐘 PostgreSQL 17 (porta: 5432)

🔥 Comandos Úteis Docker

Verificar containers ativos:

docker ps

Acessar o container PostgreSQL:

docker exec -it postgres17 psql -U postgres

Parar o container:

docker stop postgres17

Iniciar novamente:

docker start postgres17

🛡️ Configuração Firewall (se necessário)

Permita conexões externas na porta 5432 no firewall do Windows, caso necessário.

📢 Ambiente Pronto!

Seu ambiente com WSL + Docker + PostgreSQL 17 está configurado para desenvolvimento backend, com acesso externo ao banco de dados.
