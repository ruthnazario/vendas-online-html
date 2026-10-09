// =====================================================
// TechStore - Aula 6: dados em JavaScript na HOMEPAGE
// =====================================================

// 1) DADOS DOS PRODUTOS (array de objetos)
const produtos = [
  {
    nome: "MacBook Neo",
    descricao: "Ideal para estudos, trabalho e produtividade.",
    preco: 5499.0,
    imagem: "imagens/notebook.jpg",
    alt: "Notebook moderno",
  },
  {
    nome: "iPhone 17 Pro",
    descricao: "Tecnologia, desempenho e praticidade para o seu dia.",
    preco: 7899.0,
    imagem: "imagens/smartphone.jpg",
    alt: "Smartphone moderno",
  },
  {
    nome: "AirPods 4",
    descricao: "Som de qualidade para músicas, vídeos e chamadas.",
    preco: 1399.0,
    imagem: "imagens/fone.jpg",
    alt: "Fone de ouvido moderno",
  },
];

// 2) DADOS DOS BENEFÍCIOS (array de textos)
const beneficios = [
  "Produtos de qualidade",
  "Variedade de eletrônicos",
  "Compra rápida e prática",
  "Navegação simples",
  "Atendimento ao cliente",
];

// 3) FUNÇÃO PARA FORMATAR O PREÇO EM REAL (R$ 5.499,00)
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// 4) FUNÇÃO QUE MOSTRA OS PRODUTOS NA HOMEPAGE
function mostrarProdutos() {
  const grid = document.getElementById("lista-produtos");
  if (!grid) return;

  let html = "";

  produtos.forEach(function (produto) {
    html += `
      <article class="product-card">
        <img src="${produto.imagem}" alt="${produto.alt}" />
        <div class="product-content">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>
          <strong>${formatarPreco(produto.preco)}</strong>
          <a href="produtos.html">Ver produto</a>
        </div>
      </article>
    `;
  });

  grid.innerHTML = html;
}

// 5) FUNÇÃO QUE MOSTRA OS BENEFÍCIOS NA HOMEPAGE
function mostrarBeneficios() {
  const lista = document.getElementById("lista-beneficios");
  if (!lista) return;

  lista.innerHTML = beneficios
    .map(function (item) {
      return `<li>${item}</li>`;
    })
    .join("");
}

// 6) ANO ATUAL NO RODAPÉ
function mostrarAno() {
  const ano = document.getElementById("ano-atual");
  if (ano) ano.textContent = new Date().getFullYear();
}

// 7) EXECUTA TUDO QUANDO A PÁGINA CARREGAR
document.addEventListener("DOMContentLoaded", function () {
  mostrarProdutos();
  mostrarBeneficios();
  mostrarAno();
});