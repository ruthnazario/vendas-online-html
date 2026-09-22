# 🛒 TechStore — Vendas Online

> Projeto acadêmico de desenvolvimento web com foco na criação de um site estático de **Vendas Online**, desenvolvido com HTML5 e CSS3.

---

## 📚 Sobre o projeto

A **TechStore** é uma proposta de loja virtual especializada em **eletrônicos**, desenvolvida como projeto acadêmico para a disciplina de desenvolvimento web.

O projeto tem como objetivo aplicar, de forma prática e progressiva, os conhecimentos adquiridos durante as aulas, começando pela construção da estrutura HTML e evoluindo posteriormente para novas páginas, recursos e funcionalidades.

O site conta com **três páginas**: página inicial, catálogo de produtos e uma página de contato ("Fale Conosco"), contendo um **formulário HTML5** com diferentes tipos de campos e recursos de validação. Nas etapas mais recentes, o layout também recebeu posicionamento de elementos e imagens de fundo via CSS.

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
- Estrutura preparada para futuras funcionalidades

---

## 🗂️ Páginas do projeto

### 🏠 Página inicial — `index.html`

A página inicial apresenta:

- Identidade visual da TechStore
- Menu de navegação
- Apresentação da loja
- Banner principal
- Produtos em destaque
- Lista de benefícios
- Vídeo institucional
- Link para a página de produtos
- Link para a página Fale Conosco
- Rodapé

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
vendas-online-html/
│
├── index.html
├── produtos.html
├── contato.html
├── README.md
│
├── css/
│ └── style.css
│
├── imagens/
│ ├── notebook.jpg
│ ├── smartphone.jpg
│ └── fone.jpg
│
└── videos/
└── video-tecnologia.mp4

---

## 🎨 Tecnologias utilizadas

### HTML5

Utilizado para construir a estrutura das páginas, com elementos como `header`, `nav`, `main`, `section`, `article`, `footer`, `h1`–`h3`, `p`, `ul`, `ol`, `li`, `a`, `img`, `video`, `form`, `input`, `select`, `option`, `textarea`, `button` e `table`, além dos atributos nativos de validação do HTML5 nos campos do formulário.

### CSS3

Utilizado para organização do layout, cores, tipografia, espaçamentos, botões, cards de produtos, estilização do formulário, tabelas, responsividade, posicionamento (`position`), imagens de fundo (`background`) e efeitos de interação.

---

## 🛍️ Categoria escolhida

**💻 Eletrônicos** — a loja apresenta inicialmente produtos como notebook, smartphone e fone de ouvido. A variedade de produtos poderá aumentar nas próximas etapas.

---

## 🛒 Carrinho de compras

Nesta etapa, o carrinho possui apenas uma representação **visual**. Os botões de "Adicionar ao carrinho" ainda não realizam operações reais, já que o projeto é, por enquanto, um site estático. Futuramente, o carrinho poderá receber funcionalidades reais com JavaScript, banco de dados e uma linguagem de back-end.

---

## 📩 Fale Conosco

A página Fale Conosco foi implementada como a terceira página do projeto e permite praticar diferentes recursos de formulários HTML5: entrada de dados, seleção de opções, escolha de múltiplas opções, inserção de mensagens, validação de campos, campos obrigatórios e limitação de caracteres. Nesta etapa, o formulário tem finalidade acadêmica e de demonstração dos recursos nativos do HTML5.

---

## 🎥 Conteúdo multimídia

O projeto conta com um vídeo relacionado ao tema de tecnologia, organizado em `videos/video-tecnologia.mp4` e apresentado com o elemento `<video controls>`.

---

## 📱 Responsividade

O projeto possui uma estrutura CSS preparada para diferentes tamanhos de tela, reorganizando os elementos em telas menores para melhorar a experiência em smartphones, tablets, notebooks e desktops.

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

---

## 🔮 Próximas etapas

- [x] Criar homepage
- [x] Criar página de produtos
- [x] Criar página de contato
- [x] Criar formulário HTML5
- [x] Implementar navegação entre três páginas
- [x] Aplicar `position` e `background` no CSS
- [ ] Criar novas páginas
- [ ] Desenvolver página de cadastro
- [ ] Criar página de carrinho
- [ ] Melhorar catálogo de produtos
- [ ] Implementar interações com JavaScript
- [ ] Criar sistema de cadastro
- [ ] Implementar banco de dados
- [ ] Desenvolver processo de compra
- [ ] Transformar o projeto estático em uma aplicação dinâmica

**Evolução planejada:**

---

## 🧠 Boas práticas utilizadas

- Separação entre HTML e CSS
- Organização dos arquivos em pastas
- Uso de HTML5 semântico
- Utilização de `alt` nas imagens
- Links de navegação entre páginas
- Organização dos recursos multimídia
- Nomes de arquivos simples e padronizados
- Estrutura preparada para futuras expansões
- Código organizado e indentado
- Utilização de validações nativas do HTML5
- Separação das páginas por responsabilidade

---

## 👩‍💻 Projeto acadêmico

**TechStore — Vendas Online**

Projeto desenvolvido individualmente para fins acadêmicos, com o objetivo de aplicar conhecimentos de desenvolvimento web utilizando HTML5 e CSS3.

**Status:** 🟢 Em desenvolvimento — a versão atual corresponde à evolução até a **Aula 4**, incluindo homepage, página de produtos, página de contato com formulário HTML5, navegação entre as três páginas, posicionamento de elementos via `position` e imagens de fundo via `background`.

---

## 📄 Licença

Este projeto foi desenvolvido para fins **acadêmicos e educacionais**. Seu conteúdo poderá ser modificado e ampliado conforme a evolução da disciplina.