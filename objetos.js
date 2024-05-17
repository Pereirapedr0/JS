const { KeyObject } = require('node:crypto');
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
let pedido = {
  items: [{}],
};
async function solicitarPedido() {
  rl.question(`What's your order?`, pedidoAtual => {
    switch (pedidoAtual) {
      case 'hamburguer':
        pedido = {items: [...pedido.items, {...cardapio.hamburguer}]};
        console.log(pedido);
        solicitarPedido();
        break;
      case 'cheesburguer':
        pedido = {items: [...pedido.items, {...cardapio.cheesburguer}]};
        console.log(pedido);
        solicitarPedido();
        break;
      case 'xbacon':
        pedido = {items: [...pedido.items, {...cardapio.xbacon}]};
        console.log(pedido);
        solicitarPedido();
        break;
      default:
        finalizarPedido(pedido)
    }
  });
};

solicitarPedido();

function finalizarPedido(pedido) {
  diminuirEstoque(pedido);
  pedidoFinal(pedido);
}


function pedidoFinal(pedido) {
  const temNoEstoque = verificarDisponibilidade(pedido);
  if (temNoEstoque) {
    console.log("o valor do seu pedido é R$", precoPedido(pedido));
    console.log('Tudo bem, vou preparar seu pedido.')
  }
  else {
    console.log('Infelizmente vou ficar te devendo')
  }

};

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

function precoPedido(pedido) {
  let preco = 0;
  const valorHamburguer = cardapio.hamburguer.preco;
  const valorCheesburguer = cardapio.cheesburguer.preco;
  const valorXbacon = cardapio.xbacon.preco;
  switch (pedido) {
    case 'hamburguer':
      preco = valorHamburguer;
      break;
    case 'cheesburguer':
      preco = valorCheesburguer;
      break;
    case 'xbacon':
      preco = valorXbacon;
      break;

  };
  return preco;
}
function diminuirEstoque(pedido) {
  for (let i = 0; i < pedido.items.length; i++) {
    console.log(pedido.items[i])
    estoque.comida.pao = pedido.items[i].ingredientes.pao ? estoque.comida.pao - pedido.items[i].ingredientes.pao : estoque.comida.pao;
    estoque.comida.carne = pedido.items[i].ingredientes.carne ? estoque.comida.carne - pedido.items[i].ingredientes.carne : estoque.comida.carne;
    estoque.comida.queijo = pedido.items[i].ingredientes.queijo ? estoque.comida.queijo - pedido.items[i].ingredientes.queijo : estoque.comida.queijo;
    estoque.comida.bacon = pedido.items[i].ingredientes.bacon ? estoque.comida.bacon - pedido.items[i].ingredientes.bacon : estoque.comida.bacon;
    estoque.comida.alface = pedido.items[i].ingredientes.alface ? estoque.comida.alface - pedido.items[i].ingredientes.alface : estoque.comida.alface;
    estoque.comida.tomate = pedido.items[i].ingredientes.tomate ? estoque.comida.tomate - pedido.items[i].ingredientes.tomate : estoque.comida.tomate;
  }
};



