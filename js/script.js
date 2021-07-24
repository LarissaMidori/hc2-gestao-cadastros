/* const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let data = {
        name,
        email,
    }
    let convertData =JSON.stringify(data);

    localStorage.setItem("lead", convertData);

    let content = document.getElementById('content')

  let carregando = `<p>Carregando...</p>`

  let pronto = `<p>Cadastrado com Sucesso!</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

}) */
/* 
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let rua = document.getElementById("rua").value;
  let numero = document.getElementById("numero").value;
  let bairro = document.getElementById("bairro").value;
  let cidade = document.getElementById("cidade").value;
  let uf = document.getElementById("uf").value;
  let cep = document.getElementById("cep").value;
  let data = {
    nome,
    email,
    rua,
    numero,
    bairro,
    cidade,
    uf,
    cep,
  }
  let convertData =JSON.stringify(data);

  localStorage.setItem("lead", convertData);


})
 */

function validarCadastro(nome, email, rua, numero, bairro, cidade, uf, cep) {

  let nomeC = document.getElementById(nome).value;
  let emailC = document.getElementById(email).value;
  let ruaC = document.getElementById(rua).value;
  let numeroC = document.getElementById(numero).value;
  let bairroC = document.getElementById(bairro).value;
  let cidadeC = document.getElementById(cidade).value;
  let ufC = document.getElementById(uf).value;
  let cepC = document.getElementById(cep).value;

  if ( nomeC == "") {
      alert("O nome do cliente não pode estar em branco. Favor preenché-lo.");
  } else {
      cadastrarClientes(nomeC,
        emailC,
        ruaC,
        numeroC,
        bairroC,
        cidadeC,
        ufC,
        cepC);
  }
}


function cadastrarClientes(nomeC, emailC, ruaC, numeroC, bairroC, cidadeC, ufC, cepC) {
  let novoCliente = {
    nome: nomeC, email: emailC, rua: ruaC, numero: numeroC, bairro: bairroC, cidade: cidadeC, uf: ufC, cep: cepC
  };

  if ( typeof(Storage) !== "undefined" ) {
      let clientes = localStorage.getItem("clientes");
      if (clientes == null) {
          clientes = []; // Nenhum produto foi cadastrado ainda
      }else {
          clientes = JSON.parse(clientes);
      }
      clientes.push(novoCliente); // Adiciona um novo produto
      localStorage.setItem("clientes", JSON.stringify(clientes))
      alert("Cliente cadastrado com sucesso!")
      location.reload();
  } else {
      alert("A versão do seu navegador é muito antiga. Não foi possível executar a aplicação.")
  }
}