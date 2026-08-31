# 🛒 TechStore — Vendas Online

> Projeto acadêmico de desenvolvimento web com foco na criação de um site estático de **Vendas Online**, desenvolvido com HTML5 e CSS3.

---

## 📚 Sobre o projeto

A **TechStore** é uma proposta de loja virtual especializada em **eletrônicos**, desenvolvida como projeto acadêmico para a disciplina de desenvolvimento web.

O projeto tem como objetivo aplicar, de forma prática e progressiva, os conhecimentos adquiridos durante as aulas, começando pela construção da estrutura HTML e evoluindo posteriormente para novas páginas, recursos e funcionalidades.

Nesta primeira etapa, o site foi desenvolvido de forma **estática**, apresentando a estrutura visual e a navegação básica de uma loja virtual.

> 🚧 O projeto continuará sendo desenvolvido ao longo das próximas aulas.

---

## 🎯 Objetivo

O objetivo do projeto é desenvolver um site de **Vendas Online** com uma experiência simples, organizada e intuitiva para apresentação de produtos eletrônicos.

A proposta inicial contempla elementos comuns em grandes plataformas de comércio eletrônico, como:

* Navegação entre páginas;
* Catálogo de produtos;
* Apresentação de preços;
* Área destinada ao carrinho;
* Área de contato;
* Imagens dos produtos;
* Conteúdo multimídia;
* Estrutura preparada para futuras funcionalidades.

---

## 🖥️ Etapa atual — Aula 1

Nesta primeira etapa foram desenvolvidas **duas páginas HTML**:

### 🏠 Página inicial

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
* Link para a área "Fale Conosco";
* Navegação para a página de produtos;
* Rodapé.

### 🛍️ Página de produtos

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
* Link para a área de contato.

---

## 📋 Requisitos da Aula 1

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

## 🧭 Navegação

A estrutura atual possui duas páginas principais:

```text
              ┌─────────────────┐
              │      HOME       │
              │   index.html    │
              └────────┬────────┘
                       │
                       │ Produtos
                       ▼
              ┌─────────────────┐
              │    PRODUTOS     │
              │ produtos.html   │
              └────────┬────────┘
                       │
                       │ Voltar
                       ▼
              ┌─────────────────┐
              │      HOME       │
              └─────────────────┘
```

Também existe na Home o acesso à seção:

```text
Fale Conosco
```

Essa área foi preparada para receber o formulário HTML5 que será desenvolvido na próxima etapa da disciplina.

---

## 📁 Estrutura do projeto

```text
vendas-online-html/
│
├── index.html
├── produtos.html
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

## 🧩 Organização dos arquivos

### HTML

Os arquivos HTML são responsáveis pela estrutura e pelo conteúdo das páginas:

```text
index.html
produtos.html
```

### CSS

A estilização foi separada dos arquivos HTML seguindo uma organização mais limpa e reutilizável:

```text
css/style.css
```

### Imagens

As imagens utilizadas no projeto ficam armazenadas separadamente:

```text
imagens/
```

### Vídeos

Os conteúdos de vídeo utilizados pelas páginas ficam organizados em:

```text
videos/
```

---

## 🎨 Tecnologias utilizadas

### HTML5

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

### CSS3

Utilizado para:

* Organização do layout;
* Cores;
* Tipografia;
* Espaçamentos;
* Botões;
* Cards de produtos;
* Responsividade;
* Efeitos de interação;
* Organização visual da loja.

---

## 🛍️ Categoria escolhida

O segmento escolhido para o projeto foi:

### 💻 Eletrônicos

A loja apresenta inicialmente produtos como:

* Notebook;
* Smartphone;
* Fone de ouvido.

A quantidade e variedade de produtos poderão aumentar nas próximas etapas do projeto.

---

## 🛒 Carrinho de compras

Nesta primeira etapa, o carrinho possui apenas uma representação **visual**.

Os botões de "Adicionar ao carrinho" ainda não realizam operações reais, pois o projeto está sendo desenvolvido inicialmente como um site estático.

Futuramente, o carrinho poderá receber funcionalidades utilizando JavaScript, banco de dados e uma linguagem de programação no lado do servidor.

---

## 📩 Fale Conosco

A página inicial possui uma área destinada ao contato:

```text
Fale Conosco
```

Nesta primeira etapa, essa área funciona como preparação para a implementação do formulário HTML5 na próxima aula.

---

## 🎥 Conteúdo multimídia

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

## 📱 Responsividade

O projeto possui uma estrutura CSS preparada para diferentes tamanhos de tela.

Em telas menores, os elementos são reorganizados para melhorar a experiência de navegação em dispositivos como:

* Smartphones;
* Tablets;
* Notebooks;
* Desktops.

---

## 🚀 Como executar o projeto

O projeto não necessita de servidor ou banco de dados nesta primeira etapa.

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

### 4. Abra o arquivo

```text
index.html
```

### 5. Execute no navegador

O arquivo pode ser aberto diretamente em um navegador ou utilizando uma extensão como **Live Server** no VS Code.

---

## 🔮 Próximas etapas

O projeto será desenvolvido progressivamente ao longo das próximas aulas.

Entre as possíveis evoluções estão:

* [ ] Criar formulário de contato;
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

## 📈 Evolução planejada

A ideia do projeto é evoluir de:

```text
HTML + CSS
     ↓
Site estático
     ↓
Novas páginas
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

## 🧠 Boas práticas utilizadas

O projeto busca seguir algumas boas práticas de desenvolvimento:

* Separação entre HTML e CSS;
* Organização dos arquivos em pastas;
* Uso de HTML5 semântico;
* Utilização de `alt` nas imagens;
* Links de navegação entre páginas;
* Organização dos recursos multimídia;
* Nomes de arquivos simples e padronizados;
* Estrutura preparada para futuras expansões;
* Código organizado e indentado.

---

## 👩‍💻 Projeto acadêmico

**TechStore — Vendas Online**

Projeto desenvolvido individualmente para fins acadêmicos.

### Status

🟢 **Em desenvolvimento**

> A versão atual corresponde à primeira etapa do projeto e será expandida nas próximas atividades da disciplina.

---

## 📄 Licença

Este projeto foi desenvolvido para fins **acadêmicos e educacionais**.

Seu conteúdo poderá ser modificado e ampliado conforme a evolução da disciplina.
