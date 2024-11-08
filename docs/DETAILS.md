# **Teste Técnico - Desenvolvedor React Native**

Este desafio tem como objetivo avaliar as habilidades do candidato em criar interfaces e integrar endpoints de uma API. O projeto incluirá funcionalidades essenciais, como autenticação, listagem de produtos, além de adicionar, atualizar e excluir itens.

- **Documentação da API:** https://dummyjson.com/docs
- **Protótipo do Projeto no Figma:**

https://embed.figma.com/design/9EiLzeEEVRuLJpsiWebT3d/Untitled?node-id=0-1&t=A0K3YRw555dOwvLX-1&embed-host=notion&footer=false&theme=system

**Tela de Login**

- Autenticação básica (fake login) usando username e senha. A API disponibiliza dados para login no endpoint https://dummyjson.com/users. Segue um login para uso:
  - Username: emilys
  - Senha: emilyspass
- Validação dos campos do formulário.
- Tratamento de erro da API.
- Armazenamento do token e das informações do usuário.

**Listagem de Produtos com Tabs**

- Separação dos produtos por categoria usando tabs para alternar entre produtos masculinos e femininos.
  - Categorias que devem ser utilizadas:
    - Produtos masculinos: "mens-shirts”, "mens-shoes”, "mens-watches”
    - Produtos femininos: "womens-bags”, "womens-dresses”, "womens-jewellery”, "womens-shoes”, "womens-watches”
- **Endpoint**: GET [https://dummyjson.com/products/category/](https://dummyjson.com/products/category/beauty){categoria}
- Resultado da Requisição
  ```json
  {
    "products": [
      {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99,
        "discountPercentage": 7.17,
        "rating": 4.94,
        "stock": 5,
        "tags": [
          "beauty",
          "mascara"
        ],
        "brand": "Essence",
        "sku": "RCH45Q1A",
        "weight": 2,
        "dimensions": {
          "width": 23.17,
          "height": 14.43,
          "depth": 28.01
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "Low Stock",
        "reviews": [
          {
            "rating": 2,
            "comment": "Very unhappy with my purchase!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "John Doe",
            "reviewerEmail": "john.doe@x.dummyjson.com"
          },
          {
            "rating": 2,
            "comment": "Not as described!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "Nolan Gonzalez",
            "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Very satisfied!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "Scarlett Wright",
            "reviewerEmail": "scarlett.wright@x.dummyjson.com"
          }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 24,
        "meta": {
          "createdAt": "2024-05-23T08:56:21.618Z",
          "updatedAt": "2024-05-23T08:56:21.618Z",
          "barcode": "9164035109868",
          "qrCode": "..."
        },
        "thumbnail": "...",
        "images": ["...", "...", "..."]
      },
      {...},
      {...},
      {...}
      // 30 items
    ],
    "total": 194,
    "skip": 0,
    "limit": 30
  }
  ```

**Detalhes do Produto**

- Navegação para uma tela de detalhes do produto ao clicar em um item da listagem.
- Exibir informações detalhadas do produto contendo título, descrição, preço e desconto (se houver).
- **Endpoint**: GET [https://dummyjson.com/products/{id](https://dummyjson.com/products/%7Bid)}
- Resultado da Requisição
  ```json
  {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 7.17,
    "rating": 4.94,
    "stock": 5,
    "tags": ["beauty", "mascara"],
    "brand": "Essence",
    "sku": "RCH45Q1A",
    "weight": 2,
    "dimensions": {
      "width": 23.17,
      "height": 14.43,
      "depth": 28.01
    },
    "warrantyInformation": "1 month warranty",
    "shippingInformation": "Ships in 1 month",
    "availabilityStatus": "Low Stock",
    "reviews": [
      {
        "rating": 2,
        "comment": "Very unhappy with my purchase!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "John Doe",
        "reviewerEmail": "john.doe@x.dummyjson.com"
      },
      {
        "rating": 2,
        "comment": "Not as described!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Nolan Gonzalez",
        "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
      },
      {
        "rating": 5,
        "comment": "Very satisfied!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Scarlett Wright",
        "reviewerEmail": "scarlett.wright@x.dummyjson.com"
      }
    ],
    "returnPolicy": "30 days return policy",
    "minimumOrderQuantity": 24,
    "meta": {
      "createdAt": "2024-05-23T08:56:21.618Z",
      "updatedAt": "2024-05-23T08:56:21.618Z",
      "barcode": "9164035109868",
      "qrCode": "..."
    },
    "thumbnail": "...",
    "images": ["...", "...", "..."]
  }
  ```

**Adicionar Produto**

- Formulário para adicionar um produto, com validação dos campos.
- Validar os campos de título, descrição, preço, porcentagem de desconto e url da imagem.
- Adicionar um novo produto não o adicionará no servidor. A ação simulará uma requisição POST e retornará o novo produto criado com um novo ID.
- **Endpoint**: POST https://dummyjson.com/products/add
- Resultado da Requisição
  ```json
  {
    "id": 195,
    "title": "BMW Pencil"
    /* other product data */
  }
  ```

**Atualizar Produto**

- Formulário para editar dados do produto com validação dos campos e modal de confirmação para salvar as alterações.
- Atualizar um produto não o atualizará no servidor. A ação simulará uma requisição PUT/PATCH e retornará o produto atualizado com os dados modificados.
- **Endpoint**: PUT [https://dummyjson.com/products/{id](https://dummyjson.com/products/%7Bid)}
- Resultado da Requisição
  ```json
  {
    "id": 1,
    "title": "iPhone Galaxy +1" // only title was updated
    /* other product data */
  }
  ```

**Deletar Produto**

- Modal de confirmação para exclusão, permitindo ao usuário confirmar ou cancelar.
- Excluir um produto não o excluirá no servidor. A ação simulará uma requisição DELETE e retornará o produto excluído com as chaves isDeleted e deletedOn.
- **Endpoint**: DELETE [https://dummyjson.com/products/{id](https://dummyjson.com/products/%7Bid)}
- Resultado da Requisição
  ```json
  {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    /* other product data */
    "isDeleted": true,
    "deletedOn": /* ISOTime */
  }
  ```

**Bottom Tabs**

- Implementação de uma bottom tab para "Home" e "Configurações".

**Tema**

- Utilizar o **Gluestack UI** para criar um tema global, aplicando-o em todas as telas.

**Logout**

- Implementação de logout simples que redireciona para a tela de login e limpa o estado global do usuário.

**Requisitos Técnicos**

- **Expo**: Utilizar para a configuração e execução do aplicativo.
- **Expo Router**: Para navegação (tab e stack).
- **React Query**: Para lidar com requisições da API.
- **Axios**: Para as chamadas de API.
- **Zustand**: Para gerenciamento de estado global.
- **React Hook Form**: Para criação e validação dos formulários de adição e atualização de produtos.
- **Gluestack UI**: Para estilização de UI e tema.

**Critérios de Avaliação**

- **Organização e Estrutura do Código**: Organização dos arquivos, componentes e lógica.
- **Uso das Tecnologias**: Uso correto e eficiente de React Query, Zustand, React Hook Form, Expo Router e Gluestack UI.
- **Interface e UX**: A interface deve ser limpa e fácil de navegar.
- **Funcionalidade Completa**: Todas as funcionalidades mencionadas devem estar operacionais.
- **Boas Práticas**: Seguir boas práticas de desenvolvimento, como componentização, modularização etc.

**Entrega**

- **Repositório Git**: Criar um repositório público no GitHub e compartilhar o link.
- **Documentação**: Incluir um README detalhado com instruções para rodar o projeto, explicação das tecnologias e decisões tomadas.

**Dúvidas**

Caso necessário, fique à vontade para tirar dúvidas.
