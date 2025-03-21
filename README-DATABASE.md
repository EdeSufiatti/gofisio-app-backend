# 🌟 Manual Completo - Instalação do Ambiente Backend (WSL + Docker + PostgreSQL 17)

## ✅ Requisitos

- Windows 10 ou superior
- Executar PowerShell como **Administrador**

---

## 🚀 1⃣ Instalando WSL (Windows Subsystem for Linux)

Execute no PowerShell:

```powershell
wsl --install
```

Defina o WSL 2 como padrão:

```powershell
wsl --set-default-version 2
```

Liste distribuições disponíveis:

```powershell
wsl --list --online
```

Instale a distribuição Ubuntu:

```powershell
wsl --install -d Ubuntu
```

👉 Reinicie o computador após a instalação!

---

## 🐳 2⃣ Instalando Docker Desktop via PowerShell

Baixe e instale:

```powershell
Invoke-WebRequest -Uri "https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe" -OutFile "DockerDesktopInstaller.exe"
Start-Process -Wait -FilePath ".\DockerDesktopInstaller.exe" -ArgumentList "install", "--quiet"
```

Após instalado, abra o Docker Desktop e habilite a integração com **WSL 2**.

---

## 🐘 3⃣ Instalando PostgreSQL 17 via Docker

Crie e inicie um container PostgreSQL:

```powershell
docker run --name postgres17 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:17
```

---

## 🌐 4⃣ Testando Acesso Externo ao PostgreSQL

Com o container rodando, conecte ao banco:

```bash
psql -h 127.0.0.1 -U postgres -p 5432
```

As credenciais padrão:

- **User:** postgres
- **Password:** postgres

---

## 📄 Estrutura do Ambiente Final

```
📁 Windows
 └🐧 Ubuntu WSL
       └🐳 Docker
             └🐘 PostgreSQL 17 (porta: 5432)
```

---

## 🔥 Comandos Úteis Docker

- Verificar containers ativos:

```powershell
docker ps
```

- Acessar o container PostgreSQL:

```powershell
docker exec -it postgres17 psql -U postgres
```

- Parar o container:

```powershell
docker stop postgres17
```

- Iniciar novamente:

```powershell
docker start postgres17
```

---

## 🛡️ Configuração Firewall (se necessário)

Permita conexões externas na porta `5432` no firewall do Windows, caso necessário.

---

## 📲 Ambiente Pronto!

Seu ambiente com **WSL + Docker + PostgreSQL 17** está configurado para desenvolvimento backend, com acesso externo ao banco de dados.

