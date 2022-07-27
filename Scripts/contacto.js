class Contacto {
    constructor (nombre, email, telefono, mensaje){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.mensaje = mensaje;
    }
}

function handleLlenado(e){ 
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    let contacto = new Contacto(nombre,email,telefono,mensaje);
    contactos.push(contacto);
    alert("FORMUALRIO CARGADO CORRECTAMENTE");    
}          

    


const contactos = [];

let formulario = document.getElementById("formulario");
formulario.addEventListener('submit', handleLlenado);






