# Atividade Guiada — React com React Router

Projeto desenvolvido para a atividade **Construindo uma Aplicação React com React Router**.

## Funcionalidades implementadas

- Aplicação React criada para execução com Vite.
- Navegação com React Router sem recarregar a página.
- Rotas estáticas:
  - `/`
  - `/sobre`
  - `/contato`
  - `/produtos`
- Rota dinâmica `/produtos/:id`.
- Lista de produtos com links para detalhes individuais.
- Uso de `useParams()` para ler o parâmetro `id` da URL.
- Busca do produto com `find()` e conversão de `id` com `parseInt()`.
- Renderização condicional para produto inexistente.
- Link para voltar à lista de produtos.
- Estilização responsiva com CSS.
- Rota 404 adicional para endereços inexistentes.

## Como executar

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador o endereço mostrado pelo Vite, normalmente `http://localhost:5173`.

## Testes sugeridos

Acesse as páginas pelo menu e teste diretamente:

- `http://localhost:5173/produtos/1`
- `http://localhost:5173/produtos/2`
- `http://localhost:5173/produtos/3`
- `http://localhost:5173/produtos/999`

Em `/produtos/2`, a aplicação apresenta **Mouse sem fio** e **R$ 150**.

## Entrega no GitHub

O repositório deve se chamar:

```text
atividade-guiada-aula-06-frameworks-1
```

Depois de criar um repositório público no GitHub, execute:

```bash
git init
git add .
git commit -m "Entrega da atividade guiada React Router"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

Por fim, envie o link público do repositório no campo de resposta da atividade.
