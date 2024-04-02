

# Requisitos
## Requisitos obrigatórios
- [x] Seguimentação de commits
- [x] Lint
- [x] Autenticação via Spotify
- [x] Listar artistas
- [x] Listar albuns de um artista
- [x] Utilizar paginação (scroll infinito ou não)
- [x] Funcionamento offline
- [x] Testes unitários
- [x] Deploy da aplicação

## Bônus
- [ ] Testes E2E
- [ ] Integração com Sentry
- [ ] CI/CD
- [ ] Responsividade (celular e tablet)
- [ ] Qualidade de código (Sonarqube)
- [x] PWA

# TODO: Feats
- [x] Criar tela do perfil do usuário
- [ ] Criar tela home
- [x] Fazer envio das informações para criar playlist
- [x] Adicionar infinite scroll nas listagens

# TODO: Docs
- [x] Adicionar instruções de como rodar o projeto
- [ ] Adicionar instruções de como rodar os testes
- [ ] Adicionar instruções de como fazer o deploy
- [ ] Adicionar instruções de como acessar a aplicação


## Instruções para rodar o projeto
### 1. Clone o repositório
```bash
git clone https://github.com/Makley-Tibola-Trichez/spotify-integration.git
```


### 2. Instale as dependências
  No projeto está sendo utilizado o pnpm como gerenciador de dedências, então caso não tenha instalado, instale com o comando:
```bash
npm install -g pnpm
```
  Após isso, instale as dependências do projeto com o comando:
```bash
pnpm install
```

### 3. Clone o arquivo `.env.example` e renomeie para `.env`
```bash
cp .env.example .env
```
É necessário adicionar o client_id do spotify no arquivo .env para poder fazer a conexão com a API do spotify


### 4. Rode o projeto
#### Modo de desenvolvimento
Caso queira rodar o projeto em modo de desenvolvimento, utilize o comando: 
```bash
pnpm dev
```

#### Modo de produção
Caso queira rodar o projeto em modo de produção, utilize os comandos:
```bash
pnpm build
pnpm preview
```

### 5. Acesse o projeto
Acesse o projeto em `http://localhost:3000`


## Instruções para rodar os testes
```bash
pnpm test
```
