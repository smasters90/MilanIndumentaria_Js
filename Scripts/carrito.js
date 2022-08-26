function agregarCarrito(prod){
    
        contProduct.innerHTML += `
            <div class = "contenedor__carrito d-flex flex-wrap gap-2 align-items-center justify-content-around">
                <div class ="col-4">
                    <img class="img--carrito  img-fluid d-flex" src="${prod.imagen}" alt="${prod.nombre} id = "${prod.id}"">
                </div>
                <div class = "col-6">
                    <p> Producto: ${prod.nombre} </p>
                    <p> Precio $: ${prod.precio} </p>
                    <p> Cantidad: ${prod.cantidad} </p>
                    <p> <strong> Total $: ${prod.precio * prod.cantidad } </strong></p>
                </div>
                <br>
            </div>
            `
}

function limpiarCarrito(){
    contProduct.innerHTML = `
    `
}




let contProduct = document.getElementById("cont__producto");
let botonCarrito = document.querySelector('.btn__carrito');

botonCarrito.addEventListener('click', ()=>{
    limpiarCarrito();
    for(prod of carrito){
        agregarCarrito(prod);
    }  
});

