function login() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "admin@gmail.com" && senha == "7894561230101") {
        location.href = '../page/home.html';
    } else{
        alert('Senha ou Email incorreto');
        location.href = '../index.html'
    }
}
