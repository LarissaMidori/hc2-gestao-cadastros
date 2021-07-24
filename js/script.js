const form = document.getElementById("form")

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

})