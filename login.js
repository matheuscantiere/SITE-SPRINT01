
const layout = document.getElementById('layout');
const registreBtn = document.getElementById('registre');
const loginBtn = document.getElementById('login');

registreBtn.addEventListener('click', () => {
    layout.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    layout.classList.remove("active");
});

// login com if e else

function entrar(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "matheus" && password == "oi") {
        alert("Logado com sucesso!");
        window.open('index2.html');
    }else {
        alert("Usuário ou senha incorretos");
    }
    
}

function cadastrar() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  if (username.trim() == "" || password.trim() == "") {
      alert("Por favor, preencha todos os campos.");
      return;
  }else{
    alert("Conta criada com sucesso!");
    window.open('pagina2.html', '_blank');
  }  
}
