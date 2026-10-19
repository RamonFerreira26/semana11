
var produtos = [
    {
        id: 1,
        nome: "Smartphone Galaxy A55",
        preco: 1899.90,
        categoria: "Celulares",
        imagem: "https://i5.walmartimages.com/seo/Samsung-Galaxy-A55-5G-A556E-128GB-Dual-SIM-GSM-Unlocked-Android-Smartphone-Latin-Variant-US-Compatible-LTE-Awesome-Ice-Blue_14af283d-fe08-4a97-a507-e0ec55469068.6effb1a3e06034aa0653d4399c488d21.jpeg",
        descricao: "Celular com tela de qualidade e bom desempenho.",
        marca: "Samsung",
        modelo: "Galaxy A55",
        estoque: 10,
        especificacoes: ["128 GB de armazenamento", "8 GB de memória RAM", "Tela de 6,6 polegadas"]
    },
    {
        id: 2,
        nome: "iPhone 15",
        preco: 3999.90,
        categoria: "Celulares",
        imagem: "https://tse1.mm.bing.net/th/id/OIP.Gpzgm18o2-CqamViqEuYHgHaFS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descricao: "Smartphone com câmera de alta qualidade.",
        marca: "Apple",
        modelo: "iPhone 15",
        estoque: 5,
        especificacoes: ["128 GB de armazenamento", "Câmera de 48 MP", "Tela de 6,1 polegadas"]
    },
    {
        id: 3,
        nome: "Notebook IdeaPad",
        preco: 2799.90,
        categoria: "Computadores",
        imagem: "https://a-static.mlcdn.com.br/1500x1500/notebook-lenovo-ideapad-3i-intel-core-i5-8gb-256gb-ssd-156-full-hd-windows-11-82md0007br/magazineluiza/235631700/4f0c8a789fc93edf1d35c26508fddbc6.jpg",
        descricao: "Notebook indicado para estudos e trabalho.",
        marca: "Lenovo",
        modelo: "IdeaPad",
        estoque: 7,
        especificacoes: ["8 GB de memória RAM", "SSD de 256 GB", "Tela de 15,6 polegadas"]
    },
    {
        id: 4,
        nome: "Notebook Gamer",
        preco: 4599.90,
        categoria: "Computadores",
        imagem: "https://tse3.mm.bing.net/th/id/OIP.uvpFUU-9qCwOrz6sC_jdpgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descricao: "Notebook para jogos e tarefas mais pesadas.",
        marca: "Acer",
        modelo: "Nitro",
        estoque: 4,
        especificacoes: ["16 GB de memória RAM", "SSD de 512 GB", "Placa de vídeo dedicada"]
    },
    {
        id: 5,
        nome: "Fone Bluetooth",
        preco: 149.90,
        categoria: "Acessórios",
        imagem: "https://m.media-amazon.com/images/I/517QlxmjUJL._AC_.jpg",
        descricao: "Fone sem fio para ouvir músicas e atender chamadas.",
        marca: "JBL",
        modelo: "Tune",
        estoque: 20,
        especificacoes: ["Conexão Bluetooth", "Bateria recarregável", "Design sem fio"]
    },
    {
        id: 6,
        nome: "Smartwatch Fit",
        preco: 299.90,
        categoria: "Acessórios",
        imagem: "https://tse2.mm.bing.net/th/id/OIP.O0pfboWfoMjEfV13CvpEdgHaGL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descricao: "Relógio inteligente para acompanhar atividades.",
        marca: "Samsung",
        modelo: "Fit",
        estoque: 12,
        especificacoes: ["Monitoramento de atividades", "Notificações", "Pulseira ajustável"]
    },
    {
        id: 7,
        nome: "Controle sem fio",
        preco: 249.90,
        categoria: "Games",
        imagem: "https://tse3.mm.bing.net/th/id/OIP.ZTcNpyfR9vMpLzlK2kv0CwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3https://placehold.co/300x200?text=Controle",
        descricao: "Controle sem fio para jogar no computador.",
        marca: "Logitech",
        modelo: "F310",
        estoque: 9,
        especificacoes: ["Conexão USB", "Design ergonômico", "Compatível com computador"]
    },
    {
        id: 8,
        nome: "Console de videogame",
        preco: 3499.90,
        categoria: "Games",
        imagem: "https://tse1.mm.bing.net/th/id/OIP.rbT3zSobuu5YCD2sUdMsXwHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descricao: "Console para jogar diversos títulos.",
        marca: "Sony",
        modelo: "PlayStation 5",
        estoque: 3,
        especificacoes: ["Armazenamento SSD", "Jogos em alta resolução", "Controle sem fio"]
    }
];

function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function mostrarProdutos(lista) {
    var catalogo = document.getElementById("catalogo");

    if (catalogo == null) {
        return;
    }

    catalogo.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {
        var produto = lista[i];

        var card = document.createElement("div");
        card.className = "produto";

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.categoria}</p>
            <p class="preco">${formatarPreco(produto.preco)}</p>
            <a href="detalhes.html?id=${produto.id}">Ver detalhes</a>
        `;

        catalogo.appendChild(card);
    }

    if (lista.length == 0) {
        catalogo.innerHTML = "<p>Nenhum produto encontrado.</p>";
    }
}
function buscarProdutos() {
    var campoBusca = document.getElementById("busca");

    if (campoBusca == null) {
        return;
    }

    var texto = campoBusca.value.toLowerCase();
    var encontrados = [];

    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].nome.toLowerCase().includes(texto)) {
            encontrados.push(produtos[i]);
        }
    }

    mostrarProdutos(encontrados);
}

function mostrarDetalhes() {
    var areaDetalhes = document.getElementById("detalhes");

    if (areaDetalhes == null) {
        return;
    }

    var parametros = new URLSearchParams(window.location.search);
    var id = Number(parametros.get("id"));
    var produtoEscolhido = null;

    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            produtoEscolhido = produtos[i];
            break;
        }
    }

    if (produtoEscolhido == null) {
        areaDetalhes.innerHTML = "<h2>Produto não encontrado.</h2>";
        return;
    }

    var listaEspecificacoes = "";

    for (var i = 0; i < produtoEscolhido.especificacoes.length; i++) {
        listaEspecificacoes += "<li>" +
            produtoEscolhido.especificacoes[i] +
            "</li>";
    }

    areaDetalhes.innerHTML = `
        <img src="${produtoEscolhido.imagem}" alt="${produtoEscolhido.nome}">
        <h2>${produtoEscolhido.nome}</h2>
        <p>${produtoEscolhido.descricao}</p>
        <p class="preco">${formatarPreco(produtoEscolhido.preco)}</p>
        <p><strong>Categoria:</strong> ${produtoEscolhido.categoria}</p>
        <p><strong>Marca:</strong> ${produtoEscolhido.marca}</p>
        <p><strong>Modelo:</strong> ${produtoEscolhido.modelo}</p>
        <p><strong>Quantidade em estoque:</strong> ${produtoEscolhido.estoque}</p>
        <h3>Especificações</h3>
        <ul>${listaEspecificacoes}</ul>
    `;
}

if (document.getElementById("catalogo") != null) {
    mostrarProdutos(produtos);

    document.getElementById("busca").addEventListener("input", buscarProdutos);
}

if (document.getElementById("detalhes") != null) {
    mostrarDetalhes();
}
