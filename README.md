# 🛒 TechStore — Vendas Online

> Projeto acadêmico de desenvolvimento web com foco na criação de um site estático de **Vendas Online**, desenvolvido com HTML5 e CSS3.

---

## 📚 Sobre o projeto

A **TechStore** é uma proposta de loja virtual especializada em **eletrônicos**, desenvolvida como projeto acadêmico para a disciplina de desenvolvimento web.

O projeto tem como objetivo aplicar, de forma prática e progressiva, os conhecimentos adquiridos durante as aulas, começando pela construção da estrutura HTML e evoluindo posteriormente para novas páginas, recursos e funcionalidades.

Nesta etapa, o site foi ampliado com uma **terceira página**, destinada ao contato com o cliente, contendo um **formulário HTML5** com diferentes tipos de campos e recursos de validação.

> 🚧 O projeto continuará sendo desenvolvido e aprimorado ao longo das próximas aulas.

---

## 🎯 Objetivo

O objetivo do projeto é desenvolver um site de **Vendas Online** com uma experiência simples, organizada e intuitiva para apresentação de produtos eletrônicos.

A proposta contempla elementos comuns em plataformas de comércio eletrônico, como:

* Navegação entre páginas;
* Catálogo de produtos;
* Apresentação de preços;
* Área destinada ao carrinho;
* Área de contato;
* Formulário HTML5;
* Imagens dos produtos;
* Conteúdo multimídia;
* Estrutura preparada para futuras funcionalidades.

---

# 📚 Etapa atual — Aula 2

Nesta etapa, o projeto foi ampliado com a criação de uma **terceira página dedicada ao formulário de contato**.

A página **Fale Conosco** foi desenvolvida utilizando recursos do HTML5, permitindo praticar diferentes tipos de campos, controles de formulário e validações.

### 🆕 Novos recursos implementados

* ✅ Terceira página do projeto;
* ✅ Página de contato;
* ✅ Formulário HTML5;
* ✅ Organização dos campos em tabela;
* ✅ Campos de texto;
* ✅ Campo de e-mail;
* ✅ Campo de telefone;
* ✅ Campo de data;
* ✅ Campo numérico;
* ✅ Campo `select`;
* ✅ Radio buttons;
* ✅ Checkboxes;
* ✅ Textarea;
* ✅ Campos obrigatórios;
* ✅ Validação utilizando atributos HTML5;
* ✅ Limitação de quantidade de caracteres;
* ✅ Navegação entre as três páginas;
* ✅ Link **Fale Conosco** na navegação;
* ✅ Link para retorno à página inicial;
* ✅ Link para acesso à página de produtos.

---

## 🏠 Página inicial

Arquivo:

```text
index.html
```

A página inicial apresenta:

* Identidade visual da TechStore;
* Menu de navegação;
* Apresentação da loja;
* Banner principal;
* Produtos em destaque;
* Imagens;
* Lista de benefícios;
* Vídeo;
* Link para a página de produtos;
* Link para a página **Fale Conosco**;
* Rodapé.

---

## 🛍️ Página de produtos

Arquivo:

```text
produtos.html
```

A página de produtos apresenta:

* Catálogo de produtos;
* Imagens dos produtos;
* Categorias;
* Descrições;
* Preços;
* Botões de ação;
* Lista ordenada com etapas de compra;
* Vídeo;
* Link para retornar à página inicial;
* Link para a página de contato.

---

## 📩 Página Fale Conosco

Arquivo:

```text
contato.html
```

A terceira página foi desenvolvida na **Aula 2** e possui um formulário destinado ao contato do usuário com a loja.

O formulário contém diferentes elementos HTML5 para coleta de informações.

### Campos implementados

* **Nome**
* **E-mail**
* **Telefone**
* **Data**
* **Número**
* **Seleção de opções**
* **Radio buttons**
* **Checkboxes**
* **Mensagem**
* **Botão de envio**

### Validações HTML5

Foram utilizados recursos nativos do HTML5 para melhorar a validação dos dados preenchidos pelo usuário.

Entre eles:

* `required`
* `type="email"`
* `type="tel"`
* `type="date"`
* `type="number"`
* `min`
* `max`
* `maxlength`

Esses recursos permitem validar determinadas informações diretamente pelo navegador, sem a necessidade de JavaScript nesta etapa.

---

# 📋 Requisitos da Aula 1

O projeto foi estruturado considerando os elementos solicitados na primeira atividade:

| Requisito               | Status |
| ----------------------- | :----: |
| HTML                    |    ✅   |
| Textos                  |    ✅   |
| Títulos                 |    ✅   |
| Listas                  |    ✅   |
| Links                   |    ✅   |
| Imagens                 |    ✅   |
| Vídeo                   |    ✅   |
| Duas páginas            |    ✅   |
| Navegação entre páginas |    ✅   |
| Link de ida e volta     |    ✅   |
| Área "Fale Conosco"     |    ✅   |
| Estrutura estática      |    ✅   |

---

# 📋 Requisitos da Aula 2

Na segunda etapa, novos recursos foram adicionados ao projeto:

| Recurso                       | Status |
| ----------------------------- | :----: |
| Terceira página               |    ✅   |
| Página de contato             |    ✅   |
| Formulário HTML5              |    ✅   |
| Campos de texto               |    ✅   |
| Campo de e-mail               |    ✅   |
| Campo de telefone             |    ✅   |
| Campo de data                 |    ✅   |
| Campo numérico                |    ✅   |
| Select                        |    ✅   |
| Radio buttons                 |    ✅   |
| Checkboxes                    |    ✅   |
| Textarea                      |    ✅   |
| Campos obrigatórios           |    ✅   |
| Validação HTML5               |    ✅   |
| Limite de caracteres          |    ✅   |
| Navegação entre três páginas  |    ✅   |
| Link "Fale Conosco"           |    ✅   |
| Retorno para a página inicial |    ✅   |

---

# 🧭 Navegação

A estrutura atual possui **três páginas principais**:

```text
                       ┌─────────────────┐
                       │      HOME       │
                       │   index.html    │
                       └───────┬─────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
                    │ Produtos            │ Fale Conosco
                    ▼                     ▼
           ┌─────────────────┐    ┌─────────────────┐
           │    PRODUTOS     │    │     CONTATO     │
           │ produtos.html   │    │ contato.html    │
           └────────┬────────┘    └────────┬────────┘
                    │                     │
                    │ Voltar              │ Voltar
                    └──────────┬──────────┘
                               ▼
                       ┌─────────────────┐
                       │      HOME       │
                       │   index.html    │
                       └─────────────────┘
```

A navegação permite que o usuário:

* Acesse a página inicial;
* Acesse a página de produtos;
* Acesse a página de contato;
* Retorne à página inicial;
* Navegue entre as páginas por meio dos links disponíveis no site.

---

# 📁 Estrutura do projeto

```text
vendas-online-html/

│
├── index.html
├── produtos.html
├── contato.html
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

# 🧩 Organização dos arquivos

## HTML

Os arquivos HTML são responsáveis pela estrutura e pelo conteúdo das páginas:

```text
index.html
produtos.html
contato.html
```

Cada arquivo representa uma página diferente do site.

### `index.html`

Página principal da TechStore.

### `produtos.html`

Página responsável pela apresentação do catálogo de produtos.

### `contato.html`

Página desenvolvida na Aula 2, contendo o formulário HTML5 de contato.

---

## CSS

A estilização foi separada dos arquivos HTML seguindo uma organização mais limpa e reutilizável:

```text
css/style.css
```

O arquivo CSS é utilizado para padronizar a aparência das páginas e seus componentes.

---

## Imagens

As imagens utilizadas no projeto ficam armazenadas separadamente:

```text
imagens/
```

---

## Vídeos

Os conteúdos de vídeo utilizados pelas páginas ficam organizados em:

```text
videos/
```

---

# 🎨 Tecnologias utilizadas

## HTML5

Utilizado para construir a estrutura das páginas e aplicar elementos como:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `footer`
* `h1`, `h2`, `h3`
* `p`
* `ul`
* `ol`
* `li`
* `a`
* `img`
* `video`
* `form`
* `input`
* `select`
* `option`
* `textarea`
* `button`
* `table`

Também foram utilizados atributos de validação do HTML5 para os campos do formulário.

---

## CSS3

Utilizado para:

* Organização do layout;
* Cores;
* Tipografia;
* Espaçamentos;
* Botões;
* Cards de produtos;
* Formulário;
* Tabelas;
* Responsividade;
* Efeitos de interação;
* Organização visual da loja.

---

# 🛍️ Categoria escolhida

O segmento escolhido para o projeto foi:

## 💻 Eletrônicos

A loja apresenta inicialmente produtos como:

* Notebook;
* Smartphone;
* Fone de ouvido.

A quantidade e variedade de produtos poderão aumentar nas próximas etapas do projeto.

---

# 🛒 Carrinho de compras

Nesta primeira etapa, o carrinho possui apenas uma representação **visual**.

Os botões de **"Adicionar ao carrinho"** ainda não realizam operações reais, pois o projeto está sendo desenvolvido inicialmente como um site estático.

Futuramente, o carrinho poderá receber funcionalidades utilizando JavaScript, banco de dados e uma linguagem de programação no lado do servidor.

---

# 📩 Fale Conosco

A página **Fale Conosco** foi implementada como a terceira página do projeto.

O formulário permite praticar diferentes recursos de formulários HTML5, incluindo:

* Entrada de dados;
* Seleção de opções;
* Escolha de múltiplas opções;
* Inserção de mensagens;
* Validação de campos;
* Campos obrigatórios;
* Limitação de caracteres.

Nesta etapa, o formulário possui finalidade acadêmica e de demonstração dos recursos HTML5.

---

# 🎥 Conteúdo multimídia

O projeto também possui um vídeo relacionado ao tema de tecnologia.

O arquivo está organizado em:

```text
videos/video-tecnologia.mp4
```

O vídeo é apresentado utilizando o elemento HTML5:

```html
<video controls>
```

---

# 📱 Responsividade

O projeto possui uma estrutura CSS preparada para diferentes tamanhos de tela.

Em telas menores, os elementos são reorganizados para melhorar a experiência de navegação em dispositivos como:

* Smartphones;
* Tablets;
* Notebooks;
* Desktops.

---

# 🚀 Como executar o projeto

O projeto não necessita de servidor ou banco de dados nesta etapa.

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd vendas-online-html
```

### 3. Abra o projeto no VS Code

```bash
code .
```

### 4. Abra o arquivo principal

```text
index.html
```

### 5. Execute no navegador

O arquivo pode ser aberto diretamente em um navegador ou utilizando uma extensão como **Live Server** no VS Code.

---

# 🔮 Próximas etapas

O projeto será desenvolvido progressivamente ao longo das próximas aulas.

Entre as possíveis evoluções estão:

* [x] Criar homepage;
* [x] Criar página de produtos;
* [x] Criar página de contato;
* [x] Criar formulário HTML5;
* [x] Implementar navegação entre três páginas;
* [ ] Criar novas páginas;
* [ ] Desenvolver página de cadastro;
* [ ] Criar página de carrinho;
* [ ] Melhorar catálogo de produtos;
* [ ] Implementar interações com JavaScript;
* [ ] Criar sistema de cadastro;
* [ ] Implementar banco de dados;
* [ ] Desenvolver processo de compra;
* [ ] Transformar o projeto estático em uma aplicação dinâmica.

---

# 📈 Evolução planejada

A ideia do projeto é evoluir de:

```text
HTML + CSS
     ↓
Site estático
     ↓
Múltiplas páginas
     ↓
Formulários HTML5
     ↓
JavaScript
     ↓
Banco de dados
     ↓
Sistema dinâmico
     ↓
Processo de compra
```

---

# 🧠 Boas práticas utilizadas

O projeto busca seguir algumas boas práticas de desenvolvimento:

* Separação entre HTML e CSS;
* Organização dos arquivos em pastas;
* Uso de HTML5 semântico;
* Utilização de `alt` nas imagens;
* Links de navegação entre páginas;
* Organização dos recursos multimídia;
* Nomes de arquivos simples e padronizados;
* Estrutura preparada para futuras expansões;
* Código organizado e indentado;
* Utilização de validações nativas do HTML5;
* Separação das páginas por responsabilidade.

---

# 👩‍💻 Projeto acadêmico

**TechStore — Vendas Online**

Projeto desenvolvido individualmente para fins acadêmicos, com o objetivo de aplicar conhecimentos de desenvolvimento web utilizando HTML5 e CSS3.

### 📌 Status

🟢 **Em desenvolvimento**

> A versão atual corresponde à evolução do projeto até a **Aula 2**, incluindo homepage, página de produtos, página de contato, formulário HTML5 e navegação entre as três páginas.

---

# 📄 Licença

Este projeto foi desenvolvido para fins **acadêmicos e educacionais**.

Seu conteúdo poderá ser modificado e ampliado conforme a evolução da disciplina.
