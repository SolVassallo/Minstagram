const usuario = document.getElementById("login")
let login = '';
let contador = + localStorage.getItem('btn btn-primary') ?? 0;
const miUsuario = document.querySelector('.login');

usuario.addEventListener("click", identificarUsuario);

function identificarUsuario() {
    let nombre = prompt("Ingrese su nombre para identificarse");

    let usuarioNuevo = login += nombre;

    localStorage.setItem("nombre", JSON.stringify(usuario));
    let saludo = "Bienvenid@";
    alert(saludo + " " + nombre);

    if (usuarioNuevo) {
        localStorage.setItem('nombre', usuarioNuevo);
    }
}
let usuario_guardado = localStorage.getItem('btn btn-primary')

if (usuario_guardado == null) {
    usuario_guardado == ""
}
else (login.innerHTML = `Bienvenido/a ${usuario_guardado}`)