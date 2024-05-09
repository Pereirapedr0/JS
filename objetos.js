const readline = require('node:readline');

const estoque = {
  comida: {
    pao: 10,
    carne: 10,
    alface: 12,
    tomate: 20,
    bacon: 8,
    queijo: 23,
  },
  bebida: {
    refrigerantes: {
      "coca-cola": 14,
      "fanta-laranja": 20,
    },
    suco: {
      maça: 4,
      laranja: 5,
      uva: 8,
    },
  },
  sobremesa: {
    pudim: 17,
    "doce-de-leite": 13,
    pave: 16,
  },
  brindes: ["boneco-batman", "bola-de-gude", "cartinha-pokemon"],
};

const cardapio = {
  hamburguer: {
    ingredientes: {
      pao: 2,
      carne: 1,
      alface: 1,
      tomate: 1,
    },
    preco: 10,
  },
  cheesburguer: {
    ingredientes: {
      pao: 2,
      carne: 1,
      alface: 1,
      tomate: 1,
      queijo: 1,
    },
    preco: 12,
  },
  xbacon: {
    ingredientes: {
      pao: 2,
      carne: 1,
      alface: 1,
      tomate: 1,
      queijo: 1,
      bacon: 1,
    },
    preco: 15,
  },
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function questionInLoop() {
  rl.question(`What's your order?`, pedido => {
    
    const temNoEstoque = verificarDisponibilidade(pedido);
    somarPreco();
    diminuirEstoque(pedido);
    if (temNoEstoque) {
      console.log('Tudo bem, vou preparar seu pedido.')
    }
    else {
      console.log('Infelizmente vou ficar te devendo')
    }
    questionInLoop();
  });
};
questionInLoop();
function verificarDisponibilidade(pedido) {
  let disponivel = false;
  switch (pedido) {
    case 'hamburguer':
      disponivel = estoque.comida.pao > cardapio[pedido].ingredientes.pao &&
        estoque.comida.alface > cardapio[pedido].ingredientes.alface &&
        estoque.comida.carne > cardapio[pedido].ingredientes.carne &&
        estoque.comida.tomate > cardapio[pedido].ingredientes.tomate;
      break;

    case 'cheesburguer':
      disponivel = estoque.comida.pao > cardapio[pedido].ingredientes.pao &&
        estoque.comida.alface > cardapio[pedido].ingredientes.alface &&
        estoque.comida.carne > cardapio[pedido].ingredientes.carne &&
        estoque.comida.queijo > cardapio[pedido].ingredientes.queijo &&
        estoque.comida.tomate > cardapio[pedido].ingredientes.tomate;
      break;

    case 'xbacon':
      disponivel = estoque.comida.pao > cardapio[pedido].ingredientes.pao &&
        estoque.comida.alface > cardapio[pedido].ingredientes.alface &&
        estoque.comida.carne > cardapio[pedido].ingredientes.carne &&
        estoque.comida.queijo > cardapio[pedido].ingredientes.queijo &&
        estoque.comida.bacon > cardapio[pedido].ingredientes.bacon &&
        estoque.comida.tomate > cardapio[pedido].ingredientes.tomate;
      break;
  }

  return disponivel;
};

function somarPreco() {

};

function diminuirEstoque(pedido) {

  estoque.comida.pao = cardapio[pedido].ingredientes.pao ? estoque.comida.pao - cardapio[pedido].ingredientes.pao : estoque.comida.pao;
  estoque.comida.carne = cardapio[pedido].ingredientes.carne ? estoque.comida.carne - cardapio[pedido].ingredientes.carne : estoque.comida.carne;
  estoque.comida.queijo = cardapio[pedido].ingredientes.queijo ? estoque.comida.queijo - cardapio[pedido].ingredientes.queijo : estoque.comida.queijo;
  estoque.comida.bacon = cardapio[pedido].ingredientes.bacon ? estoque.comida.bacon - cardapio[pedido].ingredientes.bacon : estoque.comida.bacon;
  estoque.comida.alface = cardapio[pedido].ingredientes.alface ? estoque.comida.alface - cardapio[pedido].ingredientes.alface : estoque.comida.alface;
  estoque.comida.tomate = cardapio[pedido].ingredientes.tomate ? estoque.comida.tomate - cardapio[pedido].ingredientes.tomate : estoque.comida.tomate;
  console.log(estoque)
};
// fazer funcionar para todos os pedidos
// subtrair do estoque > outra funcão
// calcular preço

