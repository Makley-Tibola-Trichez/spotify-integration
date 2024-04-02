
# Spotify integration
Esse projeto visa utilizar a API do Spotify para exibir algumas informações sobre a conta do usuário autênticado

[Para acessar o sistema click aqui](https://spotify-integration-three.vercel.app/)

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
- [x] Integração com Sentry
- [x] CI/CD
- [x] Responsividade (celular e tablet)
- [x] PWA
- [ ] Testes E2E
- [ ] Qualidade de código (Sonarqube)

## Arquiteturas utilizadas

### Composition pattern + Atomic Design
Foi utilizado a combinação de Composition pattern e Atomic Design. Ao aplicar o Atomic Design, os componentes são organizados em uma hierarquia clara. Integrando o Composition pattern, os atomos podem ser facilmente combinados para formar componentes maiores e mais complexos, resultando em uma arquitetura flexível, escalável e de fácil manutenção.

### MVVM
A arquitetura MVVM foi escolhida para o projeto, pois ela torna possível separar a lógica de negócios da interface do usuário, facilitando a manutenção e escalabilidade do aplicativo.


## Tecnologias utilizadas

1. **React**
2. **React router dom**: utilizado para gerenciar as rotas da aplicação
3. **React query**: utilizado para fazer as requisições para a API do spotify e manter o cache dos dados para uso offline por 24 horas
4. **VitePWA**: utilizado para transformar o projeto em PWA
5. **Shadcn/UI  + TailwindCSS**: utilizado para estilizar uma estilização mais rápida e responsiva
6. **Pnpm**: utilizado como gerenciador de dependências por ter um melhor desempenho comparado a Yarn e NPM
7. **Vitest**: utilizado para rodar os testes unitários
8. **Sentry**: utilizado para monitorar erros na aplicação
9. **Biomejs**: utilizado para fazer o Lint e a formatação do código
10. **Vercel**: utilizado para fazer o deploy da aplicação
11. **Github Actions**: utilizado para fazer o CI/CD da aplicação
12. **Husky + Lint-staged**: utilizado para rodar o Lint e os testes antes de fazer o commit de alterações do código



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

Obs: na dashboard do spotify, é necessário adicionar a url `http://localhost:3000/home` como redirect_uri

Caso queria utilizar o sentry, adicione o SENTRY_DSN e  SENTRY_AUTH_TOKEN no arquivo .env

Obs: O sentry esta configurado para funcionar apenas em produção


### 4. Rode o projeto

#### Modo de produção
Caso queira rodar o projeto em modo de produção, utilize os comandos:
```bash
pnpm build
pnpm preview
```

#### Modo de desenvolvimento
Caso queira rodar o projeto em modo de desenvolvimento, utilize o comando: 
```bash
pnpm dev
```

### 5. Acesse o projeto
Acesse o projeto em `http://localhost:3000`



### Extra: 6. PWA
Para instalar o PWA, clique no botão de instalação que aparece no canto inferior esquerdo da tela em ambiente Desktop

### 7. Acesso offline
Para ter acesso offline, é necessário acessar o site uma vez com internet para que os dados sejam cacheados. Ou seja, para que tenha acesso a lista de albums de algum determinado artista offline, é necessário acessar a página de albums para carregá-los no cache.

O cache tem validade de 24 horas, após esse tempo, é necessário acessar o site novamente com internet para que os dados sejam atualizados no cache