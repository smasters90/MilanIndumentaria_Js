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

    const openModal = document.querySelector(".fotmContacto__boton");
    const modal = document.querySelector(".modalContacto");
    const closeModal = document.querySelector(".modal__close");
    
    modal.classList.add("modal--show");
    disableScroll();
    

    closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("modal--show");
        enableScroll();
    });
}          

    

const contactos = [];

let formulario = document.getElementById("formulario");
formulario.addEventListener('submit', handleLlenado);






