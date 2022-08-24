function agregarCarrito(prod){
    
        contProduct.innerHTML += `
            <br>
            <img class="img--carrito  img-fluid" src="${prod.imagen}" alt="${prod.nombre} id = "${prod.id}"">
            <span> Producto: ${prod.nombre} </span>
            <span> Precio $: ${prod.precio} </span>
            <span> Cantidad: ${prod.cantidad} </span>
            <span> Total $: ${prod.precio * prod.cantidad } </span>
            <br>
            `
}

function limpiarCarrito(){
    contProduct.innerHTML = `
    `
}




let contProduct = document.getElementById("cont__prod");
let botonCarrito = document.querySelector('.btn__carrito');

botonCarrito.addEventListener('click', ()=>{
    limpiarCarrito();
    for(prod of carrito){
        agregarCarrito(prod);
    }
    
});

