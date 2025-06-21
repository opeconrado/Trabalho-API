# API Loja Franca

API para gerenciamento de produtos de uma loja de departamentos.

## Instalação

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure o arquivo `.env` com suas credenciais
4. Inicie o servidor: `npm run dev`

## Endpoints

- GET `/api/produtos` - Lista todos os produtos
- GET `/api/produtos/:id` - Busca produto por ID
- POST `/api/produtos` - Cadastra novo produto
- PUT `/api/produtos/:id` - Atualiza produto
- DELETE `/api/produtos/:id` - Remove produto

## Documentação

Acesse a documentação Swagger em: `http://localhost:3000/api-docs`