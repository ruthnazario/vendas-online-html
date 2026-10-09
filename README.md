# 🛒 TechStore — Vendas Online

> Projeto acadêmico de desenvolvimento web com foco na criação de um site de **Vendas Online**, desenvolvido com HTML5, CSS3 e JavaScript.

---

## 📚 Sobre o projeto

A **TechStore** é uma proposta de loja virtual especializada em **eletrônicos**, desenvolvida como projeto acadêmico para a disciplina de desenvolvimento web.

O projeto tem como objetivo aplicar, de forma prática e progressiva, os conhecimentos adquiridos durante as aulas, começando pela construção da estrutura HTML e evoluindo posteriormente para novas páginas, recursos e funcionalidades.

O site conta com **três páginas**: página inicial, catálogo de produtos e uma página de contato ("Fale Conosco"), contendo um **formulário HTML5** com diferentes tipos de campos e recursos de validação. Nas etapas mais recentes, o layout recebeu posicionamento de elementos e imagens de fundo via CSS, o **design responsivo para celular (480 px)** na página inicial (Aula 5) e, na Aula 6, os **dados em JavaScript** apresentados na homepage.

> 🚧 O projeto continuará sendo desenvolvido e aprimorado ao longo das próximas aulas.

---

## 🎯 Objetivo

O objetivo do projeto é desenvolver um site de **Vendas Online** com uma experiência simples, organizada e intuitiva para apresentação de produtos eletrônicos.

A proposta contempla elementos comuns em plataformas de comércio eletrônico, como:

- Navegação entre páginas
- Catálogo de produtos
- Apresentação de preços
- Área destinada ao carrinho
- Área de contato
- Formulário HTML5
- Imagens dos produtos
- Conteúdo multimídia
- Design responsivo
- Dados dinâmicos com JavaScript
- Estrutura preparada para futuras funcionalidades

---

## 🗂️ Páginas do projeto

### 🏠 Página inicial — `index.html`

A página inicial apresenta:

- Identidade visual da TechStore
- Menu de navegação
- Apresentação da loja
- Banner principal
- Produtos em destaque (dados e cards gerados por JavaScript)
- Lista de benefícios (itens gerados por JavaScript)
- Vídeo institucional
- Link para a página de produtos
- Link para a página Fale Conosco
- Rodapé (com o ano atual gerado por JavaScript)

### 🛍️ Página de produtos — `produtos.html`

A página de produtos apresenta:

- Catálogo de produtos
- Imagens dos produtos
- Categorias
- Descrições
- Preços
- Botões de ação ("Adicionar ao carrinho")
- Lista ordenada com etapas de compra
- Vídeo
- Link para retornar à página inicial
- Link para a página de contato

### 📩 Página Fale Conosco — `contato.html`

A terceira página contém um formulário destinado ao contato do usuário com a loja.

**Campos implementados:**

| Campo | Tipo HTML5 |
|---|---|
| Nome | `text` |
| E-mail | `email` |
| Telefone | `tel` |
| Data | `date` |
| Número | `number` |
| Assunto | `select` |
| Preferência de contato | `radio` |
| Interesses | `checkbox` |
| Mensagem | `textarea` |
| Envio | `button` |

**Validações HTML5 utilizadas:**

- `required`
- `type="email"`
- `type="tel"`
- `type="date"`
- `type="number"`
- `min` / `max`
- `maxlength`

Esses recursos permitem validar as informações preenchidas pelo usuário diretamente no navegador, sem necessidade de JavaScript nesta etapa.

---

## 📋 Requisitos atendidos

### Aula 1

| Requisito | Status |
|---|:---:|
| HTML | ✅ |
| Textos | ✅ |
| Títulos | ✅ |
| Listas | ✅ |
| Links | ✅ |
| Imagens | ✅ |
| Vídeo | ✅ |
| Duas páginas | ✅ |
| Navegação entre páginas | ✅ |
| Link de ida e volta | ✅ |
| Área "Fale Conosco" | ✅ |
| Estrutura estática | ✅ |

### Aula 2

| Recurso | Status |
|---|:---:|
| Terceira página | ✅ |
| Página de contato | ✅ |
| Formulário HTML5 | ✅ |
| Campos de texto | ✅ |
| Campo de e-mail | ✅ |
| Campo de telefone | ✅ |
| Campo de data | ✅ |
| Campo numérico | ✅ |
| Select | ✅ |
| Radio buttons | ✅ |
| Checkboxes | ✅ |
| Textarea | ✅ |
| Campos obrigatórios | ✅ |
| Validação HTML5 | ✅ |
| Limite de caracteres | ✅ |
| Navegação entre três páginas | ✅ |
| Link "Fale Conosco" | ✅ |
| Retorno para a página inicial | ✅ |

### Aula 4

| Requisito | Status |
| --- | :---: |
| Três páginas HTML5 | ✅ |
| Folha de estilo CSS externa | ✅ |
| Uso da propriedade `position` | ✅ |
| Uso da propriedade `background` | ✅ |
| Imagens de fundo nas páginas | ✅ |
| Navegação entre as três páginas | ✅ |
| Link **Fale Conosco** direto para `contato.html` | ✅ |
| Formulário HTML5 | ✅ |
| Imagens e vídeo incluídos | ✅ |
| Layout responsivo | ✅ |

### Aula 5

| Requisito | Status |
| --- | :---: |
| Homepage com design responsivo para 480 px (celular) | ✅ |
| Uso de media query (`@media (max-width: 480px)`) | ✅ |
| Propriedades aplicadas somente em CSS (sem atributos de estilo no HTML) | ✅ |
| Meta viewport configurada no `<head>` | ✅ |
| Layout de desktop preservado fora da media query | ✅ |
| Entrega somente da homepage (`index.html`) | ✅ |

### Aula 6

| Requisito | Status |
| --- | :---: |
| Dados em JavaScript apresentados na **homepage** | ✅ |
| JavaScript do tipo **externo** (arquivo `script.js`) | ✅ |
| Arquivo `.js` entregue junto com os arquivos `.html` | ✅ |
| Arquivo `.js` ligado ao HTML com `<script src="script.js" defer>` | ✅ |
| Layout e responsividade da homepage preservados | ✅ |

---

## 🆕 Alterações da Aula 6

Nesta etapa, a **homepage** (`index.html`) passou a apresentar dados em JavaScript, usando um arquivo externo, o `script.js`, na mesma pasta do HTML.

* ✅ Criado o arquivo externo `script.js`
* ✅ Adicionada a linha `<script src="script.js" defer></script>` no `<head>` do `index.html`
* ✅ **Produtos em destaque:** os dados (nome, descrição, preço, imagem) ficam em um array de objetos (`produtos`) e os cards são gerados na `<div id="lista-produtos">`
* ✅ **Benefícios:** os textos ficam em um array (`beneficios`) e os itens `<li>` são gerados na `<ul id="lista-beneficios">`
* ✅ **Preços:** formatados em reais (R$) com `toLocaleString("pt-BR")`
* ✅ **Rodapé:** o ano atual é inserido automaticamente em `<span id="ano-atual">`
* ✅ Os cards gerados mantêm as mesmas classes CSS (`product-card`, `product-content`), preservando o visual e o design responsivo
* ✅ O código roda após o carregamento da página (`DOMContentLoaded`)
* ✅ Ajuste de texto: nome do produto padronizado como "iPhone 17 Pro"

**Recursos de JavaScript utilizados:**

| Recurso | Uso no projeto |
|---|---|
| `const` e arrays de objetos | Armazenar os dados dos produtos e dos benefícios |
| Funções | `formatarPreco`, `mostrarProdutos`, `mostrarBeneficios`, `mostrarAno` |
| `forEach` e `map` | Percorrer os arrays para montar o HTML |
| Template literals (crase) | Montar os cards com os dados de cada produto |
| `document.getElementById` | Localizar os elementos da página |
| `innerHTML` e `textContent` | Inserir o conteúdo na página |
| `addEventListener` | Executar o código quando a página carregar |
| `Date` | Obter o ano atual |

---

## 🆕 Alterações da Aula 5

Nesta etapa, a **homepage** (`index.html`) recebeu o design responsivo para a largura de **480 px**, utilizando exclusivamente a folha de estilo externa `css/style.css`.

* ✅ Adicionado o bloco `@media (max-width: 480px)` ao final do `style.css`, após os breakpoints já existentes (800 px e 700 px)
* ✅ Mantida a meta tag `viewport` (`width=device-width, initial-scale=1.0`) no `<head>`
* ✅ **Cabeçalho:** logo e menu centralizados, cabeçalho sem `sticky` no celular para liberar espaço de tela
* ✅ **Banner principal:** texto centralizado, título e espaçamentos reduzidos, imagem ajustada ao card
* ✅ **Botões:** empilhados em coluna e em largura total, facilitando o toque
* ✅ **Produtos em destaque:** cards em coluna única, com altura de imagem reduzida
* ✅ **Benefícios e vídeo:** espaçamentos e margens ajustados para telas pequenas
* ✅ **Fale Conosco:** conteúdo centralizado e link transformado em botão azul em largura total
* ✅ **Rodapé:** conteúdo centralizado
* ✅ Fundo fixo (`background-attachment: fixed`) substituído por `scroll` no celular, evitando travamentos
* ✅ Nenhuma alteração no HTML: todo o ajuste foi feito via CSS
* ✅ Framework não utilizado: a solução foi feita com media query em CSS puro

**Pontos de quebra (breakpoints) do projeto:**

| Largura máxima | Uso |
|---|---|
| `800px` | Tablets: menu em coluna, banner e grids em coluna única |
| `700px` | Formulário de contato em coluna única |
| `480px` | **Celular:** ajustes de tipografia, espaçamento, botões e cards (Aula 5) |

---

## 🆕 Alterações da Aula 4

Nesta etapa, as três páginas do site foram atualizadas para aplicar os conhecimentos de posicionamento e imagens de fundo utilizando exclusivamente a folha de estilo externa.

* ✅ Mantidas as três páginas HTML5: `index.html`, `produtos.html` e `contato.html`
* ✅ Mantido o CSS externo em `css/style.css`
* ✅ Aplicado `background` no `body` com a imagem `imagens/smartphone.jpg`
* ✅ Aplicado `background` no banner da página inicial com `imagens/notebook.jpg`
* ✅ Aplicado `background` nos títulos internos com `imagens/fone.jpg`
* ✅ Aplicado `position: sticky` no cabeçalho para manter o menu visível
* ✅ Aplicado `position: relative` nos principais blocos do layout
* ✅ Aplicado `position: absolute` nos elementos decorativos e identificadores visuais
* ✅ Mantida a organização responsiva para telas menores
* ✅ Mantidos os recursos HTML5 do formulário e suas validações
* ✅ Mantidos o vídeo e as imagens utilizados nas páginas
* ✅ Corrigido o link **Fale Conosco** do menu de produtos
* ✅ O link **Fale Conosco** agora abre diretamente `contato.html`, sem enviar o usuário para uma âncora no final da página inicial
* ✅ Mantidos os links de ida e volta entre Home, Produtos e Contato

---

## 🧭 Navegação

A estrutura atual possui **três páginas principais**:

```text
                       ┌─────────────────┐
                       │      HOME       │
                       │   index.html    │
                       └───────┬─────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
            Produtos│                     │Fale Conosco
                    ▼                     ▼
           ┌─────────────────┐    ┌─────────────────┐
           │    PRODUTOS     │    │     CONTATO     │
           │ produtos.html   │    │  contato.html   │
           └────────┬────────┘    └────────┬────────┘
                    │                      │
             Voltar │                      │ Voltar
                    └──────────┬───────────┘
                               ▼
                       ┌─────────────────┐
                       │      HOME       │
                       │   index.html    │
                       └─────────────────┘
```

A navegação permite que o usuário acesse a página inicial, a página de produtos e a página de contato, além de retornar entre elas livremente pelos links do menu.

---

## 📁 Estrutura do projeto

```text
vendas-online-html/
│
├── index.html
├── produtos.html
├── contato.html
├── script.js
├── README.md
│
├── css/
│   └── style.css
│
├── imagens/
│   ├── notebook.jpg
│   ├── smartphone.jpg
│   └── fone.jpg
│
└── videos/
    └── video-tecnologia.mp4
```

---

## 🎨 Tecnologias utilizadas

### HTML5

Utilizado para construir a estrutura das páginas, com elementos como `header`, `nav`, `main`, `section`, `article`, `footer`, `h1`–`h3`, `p`, `ul`, `ol`, `li`, `a`, `img`, `video`, `form`, `input`, `select`, `option`, `textarea`, `button` e `table`, além dos atributos nativos de validação do HTML5 nos campos do formulário e da meta tag `viewport` para o design responsivo.

### CSS3

Utilizado para organização do layout, cores, tipografia, espaçamentos, botões, cards de produtos, estilização do formulário, tabelas, **design responsivo com media queries**, posicionamento (`position`), imagens de fundo (`background`), Flexbox, Grid e efeitos de interação.

### JavaScript

Utilizado em um **arquivo externo** (`script.js`) para guardar os dados dos produtos e dos benefícios em arrays e apresentá-los dinamicamente na homepage, além de formatar os preços em reais e inserir o ano atual no rodapé.

---

## 🛍️ Categoria escolhida

**💻 Eletrônicos** — a loja apresenta inicialmente produtos como notebook, smartphone e fone de ouvido. A variedade de produtos poderá aumentar nas próximas etapas.

---

## 🛒 Carrinho de compras

Nesta etapa, o carrinho possui apenas uma representação **visual**. Os botões de "Adicionar ao carrinho" ainda não realizam operações reais. Futuramente, o carrinho poderá receber funcionalidades reais com JavaScript, banco de dados e uma linguagem de back-end.

---

## 📩 Fale Conosco

A página Fale Conosco foi implementada como a terceira página do projeto e permite praticar diferentes recursos de formulários HTML5: entrada de dados, seleção de opções, escolha de múltiplas opções, inserção de mensagens, validação de campos, campos obrigatórios e limitação de caracteres. Nesta etapa, o formulário tem finalidade acadêmica e de demonstração dos recursos nativos do HTML5.

---

## 🎥 Conteúdo multimídia

O projeto conta com um vídeo relacionado ao tema de tecnologia, organizado em `videos/video-tecnologia.mp4` e apresentado com o elemento `<video controls>`.

---

## 📱 Responsividade

O projeto utiliza **media queries** no arquivo `css/style.css` para adaptar o layout a diferentes tamanhos de tela:

- **Desktop:** menu à direita do logo, banner em duas colunas e cards de produtos em três colunas
- **Tablet (até 800 px):** menu em coluna, banner e seções em coluna única
- **Celular (até 480 px):** layout em coluna única, conteúdo centralizado, botões em largura total, tipografia e espaçamentos reduzidos

Na **Aula 5**, o design responsivo para 480 px foi aplicado na **homepage**. Para testar, abra o `index.html` no Chrome, pressione **F12**, ative o modo dispositivo e defina a largura em **480 px**.

---

## 🚀 Como executar o projeto

O projeto não necessita de servidor ou banco de dados nesta etapa.

```bash
# 1. Clone o repositório
git clone URL_DO_SEU_REPOSITORIO

# 2. Entre na pasta
cd vendas-online-html

# 3. Abra o projeto no VS Code
code .

# 4. Abra o arquivo principal (index.html) no navegador
# ou utilize a extensão Live Server no VS Code
```

> ⚠️ Mantenha o `script.js` na mesma pasta do `index.html`. Se ele estiver em outro lugar, os produtos e os benefícios não aparecerão na homepage.

---

## 🔮 Próximas etapas

- [x] Criar homepage
- [x] Criar página de produtos
- [x] Criar página de contato
- [x] Criar formulário HTML5
- [x] Implementar navegação entre três páginas
- [x] Aplicar `position` e `background` no CSS
- [x] Aplicar design responsivo (480 px) na homepage
- [x] Apresentar dados em JavaScript na homepage
- [ ] Estender o design responsivo para `produtos.html` e `contato.html`
- [ ] Criar novas páginas
- [ ] Desenvolver página de cadastro
- [ ] Criar página de carrinho
- [ ] Melhorar catálogo de produtos
- [ ] Implementar mais interações com JavaScript (carrinho, validação do formulário)
- [ ] Criar sistema de cadastro
- [ ] Implementar banco de dados
- [ ] Desenvolver processo de compra
- [ ] Transformar o projeto estático em uma aplicação dinâmica

---

## 🧠 Boas práticas utilizadas

- Separação entre HTML, CSS e JavaScript
- Organização dos arquivos em pastas
- Uso de HTML5 semântico
- Utilização de `alt` nas imagens
- Links de navegação entre páginas
- Organização dos recursos multimídia
- Nomes de arquivos simples e padronizados
- Estrutura preparada para futuras expansões
- Código organizado, indentado e comentado
- Utilização de validações nativas do HTML5
- Separação das páginas por responsabilidade
- Design responsivo com media queries e abordagem somente em CSS
- JavaScript externo, com dados separados da parte que os exibe

---

## 👩‍💻 Projeto acadêmico

**TechStore — Vendas Online**

Projeto desenvolvido individualmente para fins acadêmicos, com o objetivo de aplicar conhecimentos de desenvolvimento web utilizando HTML5, CSS3 e JavaScript.

**Status:** 🟢 Em desenvolvimento — a versão atual corresponde à evolução até a **Aula 6**, incluindo homepage, página de produtos, página de contato com formulário HTML5, navegação entre as três páginas, posicionamento de elementos via `position`, imagens de fundo via `background`, design responsivo para 480 px na homepage e dados em JavaScript externo apresentados na homepage.

---

## 📄 Licença

Este projeto foi desenvolvido para fins **acadêmicos e educacionais**. Seu conteúdo poderá ser modificado e ampliado conforme a evolução da disciplina.