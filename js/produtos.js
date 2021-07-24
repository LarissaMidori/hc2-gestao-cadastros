function validarProduto(nomeProd, codProd, qtdeProd) {
    let nome = document.getElementById(nomeProd).value;
    let codigo = document.getElementById(codProd).value;
    let quantidade = document.getElementById(qtdeProd).value;

    if ( nome == "") {
        alert("O nome do produto não pode estar em branco. Favor preenché-lo.");
    } else if ( codigo == "") {
        alert("O código do produto não pode estar em branco. Favor preenché-lo.");
    } else {
        cadastrarProduto(nome, codigo, parseInt(quantidade));
    }
}

function cadastrarProduto(nomeP, codigoP, quantidadeP) {
    let novoProduto = { nome: nomeP, codigo: codigoP, quantidade: quantidadeP };

    if ( typeof(Storage) !== "undefined" ) {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) {
            produtos = []; // Nenhum produto foi cadastrado ainda
        }else {
            produtos = JSON.parse(produtos);
        }
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos", JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+quantidadeP+ " unidades do produto "+nomeP+"!")
        atualizarEstoque("estoque");
        location.reload();
    } else {
        alert("A versão do seu navegador é muito antiga. Não foi possível executar a aplicação.")
    }
}

function atualizarEstoque(campo) {
    localStorage.setItem("estoque", ++document.getElementById(campo).innerHTML);
}

function carregarEstoque(campo) {
    if ( typeof(Storage) !== "undefined" ) {
        let totalEstoque = localStorage.getItem("estoque");
        if (totalEstoque == null) {
             totalEstoque = 0;
        }
        document.getElementById(campo).innerHTML = totalEstoque;
    } else {
        alert("A versão do seu navegador é muito antiga. Não foi possível executar a aplicação.")
    }
}

function listarEstoque() {
    if ( typeof(Storage) !== "undefined" ) {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null) {
             document.write("<h3>Não há itens no estoque</h3>")
        } else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Código do produto: "+produto.codigo+"</li>");
                document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    } else {
        alert("A versão do seu navegador é muito antiga. Não foi possível executar a aplicação.")
    }
}