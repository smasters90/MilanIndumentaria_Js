class Contacto {
    constructor (nombre, email, telefono, mensaje){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.mensaje = mensaje;
    }
}


function disableScroll() {
    document.body.classList.add("stop-scrolling");
}
  
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}


function handleLlenado(e){ 
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    let contacto = new Contacto(nombre,email,telefono,mensaje);
    contactos.push(contacto);
    contactosLs = contactos.map(contacto => contacto ={nombre: contacto.nombre, email: contacto.email, telefono: contacto.telefono, mensaje: contacto.mensaje })
    localStorage.setItem('datosContacto', JSON.stringify(contactosLs));

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Formulario Enviado Correctamente!',
        text: 'A la brevedad nos pondremos en contacto',
        showConfirmButton: false,
        timer: 1500
      })
      

}          

    

const contactos = [];
let contactosLs = [];

let formulario = document.getElementById("formulario");
formulario.addEventListener('submit', handleLlenado);







