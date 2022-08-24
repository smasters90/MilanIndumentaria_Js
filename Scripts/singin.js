class Usuario{
    constructor (nombre, apellido, nombreUsuario, correo, pass, repPass, sexo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.pass = pass;
        this.repPass = repPass;
        this.sexo = sexo;
    }
}

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}
  
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function checkPass(pass, repPass){
    if(pass != repPass){
        Toastify({ 
            text: 'Las contraseñas deben ser iguales',
            duration: 3000, 
            gravity: 'top', 
            position: 'right',
            className: 'toastCheck',
        }).showToast();
        return true;
    }else if(pass.length < 8){
        Toastify({ 
            text: 'La contraseña debe tener al menos 8 caracteres',
            duration: 3000, 
            gravity: 'top', 
            position: 'right',
            className: 'toastCheck',
        }).showToast();
        return true;
    }

}

function checkUser(usuarios){
    if(usuarios.some(user => user.nombreUsuario == datForm.get("nu"))){
        inputUsuario.classList.add("error");
        parrafoUsuario.classList.remove("d-none");
        inputCorreo.classList.remove("error");
        parrafoCorreo.classList.add("d-none");
        return true;
    }  
}

function checkCorreo(){
    if(usuarios.some(user => user.correo == datForm.get("em"))){
        inputCorreo.classList.add("error");
        parrafoCorreo.classList.remove("d-none");
        inputUsuario.classList.remove("error");
        parrafoUsuario.classList.add("d-none");
        return true;
    } 
}

function llenado(e){ 
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let correo = document.getElementById("correo").value;
    let pass = document.getElementById("pass").value;
    let repPass = document.getElementById("repPass").value;
    let sexo = document.getElementById("sexo").value;

    datForm = new FormData(e.target);

    if(checkPass(pass, repPass)){
    }else if (checkUser(usuarios)){
    }else if (checkCorreo(usuarios)) {
    }else {
        parrafoUsuario.classList.add("d-none");
        parrafoCorreo.classList.add("d-none");
        inputUsuario.classList.remove("error");
        inputCorreo.classList.remove("error");

        let user = new Usuario(nombre, apellido, nombreUsuario, correo, pass, repPass, sexo);
        usuarios.push(user);
        usuariosLs = usuarios.map(userLs => userLs = {nombre: userLs.nombre, apellido: userLs.apellido, nombreUsuario: userLs.nombreUsuario, correo: userLs.correo, pass: userLs.pass, sexo: userLs.sexo});
        localStorage.setItem('datosUsuarios', JSON.stringify(usuariosLs));
        
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'USUARIO CREADO',
            showConfirmButton: false,
            timer: 2000
            });

        disableScroll();
        formularioSing.reset();
    }
};
        


function buscarUsuario(e){
    e.preventDefault();
    let nombreLog = document.getElementById("usuario").value;
    let passLog = document.getElementById("contrasena").value;
    let inputUsuarioPrincipal = document.getElementById("usuario");
    let inputContrasenaPrincipal = document.getElementById("contrasena");

    let usuarioAct = usuarios.find(user => user.nombreUsuario == nombreLog) ?? "";

    if(usuarios.length == 0 || usuarioAct.nombreUsuario != nombreLog){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario incorrecto',
          });
        inputUsuarioPrincipal.classList.add("error");
        inputContrasenaPrincipal.classList.remove("error");
    } else if(usuarioAct.pass != passLog){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Contraseña incorrecta',
          });
        inputContrasenaPrincipal.classList.add("error");
        inputUsuarioPrincipal.classList.remove("error");
    } else {
        inputUsuarioPrincipal.classList.remove("error");
        inputContrasenaPrincipal.classList.remove("error");
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `ACCESO CONFIRMADO, BIENVENIDO ${(usuarioAct.nombre)}`,
            showConfirmButton: false,
            timer: 2000
          });

        disableScroll();

        formularioLog.reset();
    }
}
    



let inputUsuario = document.getElementById("nombreUsuario");
let inputCorreo = document.getElementById("correo");
let parrafoUsuario = document.getElementById("parrafoNombreUsuario");
let parrafoCorreo = document.getElementById("parrafoCorreo");
let formularioSing = document.getElementById("formSing");
let formularioLog = document.getElementById("formLog");

let datForm;
let datForm2;

let usuarios = [];
let usuariosLs = [];

formularioSing.addEventListener('submit', llenado); 
formularioLog.addEventListener('submit',buscarUsuario);
localStorage.getItem("datosUsuarios") ? usuarios = JSON.parse(localStorage.getItem("datosUsuarios")) : usuarios = [];

