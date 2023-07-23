var vetorObj = [
  {
    cod: '1',
    preço: '139,90',
    produto: 'Blusa xadrez',
    imagem: '../assets/img/feminino/1.jpg',
    categoria: 'feminino',
  },
  {
    cod: '2',
    preço: '218,90',
    produto: 'Casaco casual',
    imagem: '../assets/img/feminino/2.jpg',
    categoria: 'feminino',
  },
  {
    cod: '3',
    preço: '89,90',
    produto: 'Camisa social',
    imagem: '../assets/img/feminino/3.jpg',
    categoria: 'feminino',
  },
  {
    cod: '4',
    preço: '111,50',
    produto: 'Camisa Bege',
    imagem: '../assets/img/feminino/4.jpg',
    categoria: 'feminino',
  },
  {
    cod: '5',
    preço: '35,40',
    produto: 'Blusa animal print',
    imagem: '../assets/img/feminino/5.jpg',
    categoria: 'feminino',
  },
  {
    cod: '6',
    preço: '140,50',
    produto: 'Camisa de escura',
    imagem: '../assets/img/feminino/6.jpg',
    categoria: 'feminino',
  },

  {
    cod: '1',
    preço: '80,90',
    produto: 'Casaco Xadrez',
    imagem: '../assets/img/masculino/1.jpg',
    categoria: 'masculino',
  },
  {
    cod: '2',
    preço: '131,20',
    produto: 'Camiseta preta',
    imagem: '../assets/img/masculino/2.jpg',
    categoria: 'masculino',
  },
  {
    cod: '3',
    preço: '110,00',
    produto: 'Camisa Morty',
    imagem: '../assets/img/masculino/3.jpg',
    categoria: 'masculino',
  },
  {
    cod: '4',
    preço: '120,00',
    produto: 'Blusa cinza',
    imagem: '../assets/img/masculino/4.jpg',
    categoria: 'masculino',
  },
  {
    cod: '5',
    preço: '178,20',
    produto: 'Camisa tropical',
    imagem: '../assets/img/masculino/5.jpg',
    categoria: 'masculino',
  },
  {
    cod: '6',
    preço: '129,00',
    produto: 'Camisa polo',
    imagem: '../assets/img/masculino/6.jpg',
    categoria: 'masculino',
  },

  {
    cod: '1',
    preço: '95,20',
    produto: 'Camisa Lylo',
    imagem: '../assets/img/infantil/1.jpg',
    categoria: 'infantil',
  },
  {
    cod: '2',
    preço: '174,00',
    produto: 'Camisa Sony',
    imagem: '../assets/img/infantil/2.jpg',
    categoria: 'infantil',
  },
  {
    cod: '3',
    preço: '127,20',
    produto: 'Vestido vermelho',
    imagem: '../assets/img/infantil/3.jpg',
    categoria: 'infantil',
  },
  {
    cod: '4',
    preço: '189,00',
    produto: 'Blusa Dino',
    imagem: '../assets/img/infantil/4.jpg',
    categoria: 'infantil',
  },
  {
    cod: '5',
    preço: '199,00',
    produto: 'Casoco Minnie',
    imagem: '../assets/img/infantil/5.jpg',
    categoria: 'infantil',
  },
  {
    cod: '6',
    preço: '119,00',
    produto: 'Vestido animal print',
    imagem: '../assets/img/infantil/6.jpg',
    categoria: 'infantil',
  },
];

function produtos() {
  var content = '';
  for (var i = 0; i < vetorObj.length; i++) {
    var produto = vetorObj[i];
    content += '<div class="card" style="width: 17rem;">';
    content +=
      '<img src="' +
      produto.imagem +
      '" class="card-img-top" alt="Imagem ' +
      produto.cod +
      '">';
    content += '<div class="card-body">';
    content += '<h5 class="card-title">' + produto.produto + '</h5>';
    content += '<p class="card-text">' + produto.preço + '</p>';
    content +=
      '<input id="buttonAdicionar" class="btn btn-primary" type="button" value="Adicionar"  onclick="adicionarAoCarrinho(' +
      i +
      ')">';
    content += '</div>';
    content += '</div>';
  }
  document.getElementById('produtos-container').innerHTML = content;
}

function pageFeminino() {
  var content = '';
  for (var i = 0; i < vetorObj.length; i++) {
    var produto = vetorObj[i];
    if (produto.categoria === 'feminino') {
      content += '<div class="card" style="width: 17rem;">';
      content +=
        '<img src="' +
        produto.imagem +
        '" class="card-img-top" alt="Imagem ' +
        produto.cod +
        '">';
      content += '<div class="card-body">';
      content += '<h5 class="card-title">' + produto.produto + '</h5>';
      content += '<p class="card-text">' + produto.preço + '</p>';
      content +=
        '<input id="buttonAdicionar" class="btn btn-primary" type="button" value="Adicionar"  onclick="adicionarAoCarrinho(' +
        i +
        ')">';
      content += '</div>';
      content += '</div>';
    }
  }
  document.getElementById('produtos-container').innerHTML = content;
}

function pageInfantil() {
  var content = '';
  for (var i = 0; i < vetorObj.length; i++) {
    var produto = vetorObj[i];
    if (produto.categoria === 'infantil') {
      content += '<div class="card" style="width: 17rem;">';
      content +=
        '<img src="' +
        produto.imagem +
        '" class="card-img-top" alt="Imagem ' +
        produto.cod +
        '">';
      content += '<div class="card-body">';
      content += '<h5 class="card-title">' + produto.produto + '</h5>';
      content += '<p class="card-text">' + produto.preço + '</p>';
      content +=
        '<input id="buttonAdicionar" class="btn btn-primary" type="button" value="Adicionar"  onclick="adicionarAoCarrinho(' +
        i +
        ')">';
      content += '</div>';
      content += '</div>';
    }
  }
  document.getElementById('produtos-container').innerHTML = content;
}

function pageMasculino() {
  var content = '';
  for (var i = 0; i < vetorObj.length; i++) {
    var produto = vetorObj[i];
    if (produto.categoria === 'masculino') {
      content += '<div class="card" style="width: 17rem;">';
      content +=
        '<img src="' +
        produto.imagem +
        '" class="card-img-top" alt="Imagem ' +
        produto.cod +
        '">';
      content += '<div class="card-body">';
      content += '<h5 class="card-title">' + produto.produto + '</h5>';
      content += '<p class="card-text">' + produto.preço + '</p>';
      content +=
        '<input id="buttonAdicionar" class="btn btn-primary" type="button" value="Adicionar" onclick="adicionarAoCarrinho(' +
        i +
        ')" >';
      content += '</div>';
      content += '</div>';
    }
  }
  document.getElementById('produtos-container').innerHTML = content;
}

// Carrinho

var produtosCarrinho = [];

function adicionarAoCarrinho(index) {
  var produto = vetorObj[index];
  var itemCarrinho = produtosCarrinho.find(
    (item) => item.produto === produto.produto,
  );

  if (itemCarrinho) {
    itemCarrinho.quantidade++;
  } else {
    produto.quantidade = 1;
    produtosCarrinho.push(produto);
  }

  // console.log("Produto adicionado ao carrinho: " + produto.produto);
}
function carrinho() {
  var carrinhoCompras = document.getElementById('compras');
  carrinhoCompras.innerHTML = '';

  if (produtosCarrinho.length === 0) {
    carrinhoCompras.innerHTML = 'O carrinho está vazio.';
  } else {
    carrinhoCompras.innerHTML = '<div class="card">';
    for (var i = 0; i < produtosCarrinho.length; i++) {
      carrinhoCompras.innerHTML +=
        "<div class='card_Carrinho'>" +
        '<img src="' +
        produtosCarrinho[i].imagem +
        '" class="card-img-top" style="width: 10rem" alt="Imagem">' +
        '<h5 class="card-title">' +
        produtosCarrinho[i].produto +
        '</h5>' +
        '<p class="card-text">' +
        'R$' +
        produtosCarrinho[i].preço +
        '</p>' +
        'Quantidade: ' +
        produtosCarrinho[i].quantidade +
        '</div>';
    }
    carrinhoCompras.innerHTML += '</div>';
  }
}
