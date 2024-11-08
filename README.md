<h4 align="center">
  Health Tech Challenge
</h4>

<h4 align="center">
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

<div align="center">
  <img style="border-radius: 10px" width="320px" height="auto" alt="demo" title="demo" src="docs/videos/demo.gif" />
  <p>Demostração (gif)</p>
</div>

## 🔖 About

Este projeto é uma solução para o Teste Técnico Mobile da Health Tech, que consiste em construir uma aplicação mobile que permita:

- Autenticação
- Listagem de produtos
- Adicionar, atualizar e excluir itens.

Veja mais sobre o projeto [aqui](docs/DETAILS.md).

### Escolha das tecnologias

- **i18n e react-i18next**: Utilitários para internacionalização.
- **ESLint e Prettier**: Ferramentas para garantir a qualidade e estilo do código.
- **Lefthook**: Automatiza a execução de testes e verificação de estilo de código a cada commit.
- **Jest e RNTL**: Testes unitários garantir a qualidade do código.

### Destaques do Projeto

- **Internacionalização**: O projeto está preparado ser utilizado em diversos idiomas.
- **Inversão de Controle**: Criei contratos para algumas bibliotecas externas, como axios e async-storage.
- **Código Limpo e Organizado**: A estrutura do projeto e código foram pensados para facilitar a leitura e manutenção.
- **Commits semânticos**: As mudanças do código foram escritas em commits semânticos.
- **Casos de erro**: Foi utilizado o tratamento de erros para garantir a melhor experiência do usuário.
- **Testes**: A suíte de testes garante a qualidade do código e previne regressões.

### Funcionalidades

- **Login**: Permite que os usuários se autentiquem na aplicação.
- **Listagem de Produtos**: Exibe uma tabela com os produtos da API.
- **Categorias**: Opção de exibir produtos masculinos e femininos.
- **Detalhes**: Exibe uma nova tela com detalhes do produto.
- **Editar**: Permite editar os dados de um produto.
- **Exclusão**: Permite excluir um produto.
- **Adicionar**: Permite adicionar um novo produto.

## 🚀 Technologies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo router](https://docs.expo.dev/versions/latest/sdk/router/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/v4/)
- [Axios](https://axios-http.com/)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [Gulestack UI](https://gluestack.io/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Jest](https://jestjs.io/pt-BR/)
- [RNTL](https://callstack.github.io/react-native-testing-library/)
- [Lefthook](https://github.com/evilmartians/lefthook)

## 🏁 How to run the project

Pré-requisitos:

- node >= v20.18.0
- yarn || npm

```sh
# Clone the repository
git clone https://github.com/rafinhaa/health-tech-challenge
cd health-tech-challenge

# Install dependencies
yarn install

# run Android
yarn android

# run iOS
yarn ios
```

## ℹ️ Info

[Screenshots](docs/SCREENS.md)

## 📄 Changelog

## 📝 License

[MIT](LICENSE.txt)

**Free Software, Hell Yeah!**
