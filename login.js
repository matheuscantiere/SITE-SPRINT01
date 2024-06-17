const layout = document.getElementById('layout');
const registreBtn = document.getElementById('registre');
const loginBtn = document.getElementById('login');

registreBtn.addEventListener('click', () => {
    layout.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    layout.classList.remove("active");
});

function entrar(event) {
    event.preventDefault();  // Prevent the default form submission

    var username = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    if (username === "matheus@tamole.com" && password === "oi") {
        alert("Logado com sucesso!");
        window.open('Pagina01.html');
    } else {
        alert("Usuário ou senha incorretos");
    }
}

function cadastrar(event) {
    event.preventDefault();  // Prevent the default form submission

    var username = document.getElementById("register-username").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Conta criada com sucesso!");
        window.open('pagina2.html', '_blank');
    }  
}
