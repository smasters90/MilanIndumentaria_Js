function agregarCarrito(prod){
    subTotal += (prod.precio * prod.cantidad);
        
    contProduct.innerHTML += `
        <div class = "contenedor__carrito d-flex flex-wrap gap-2 align-items-center justify-content-around">
            <div class ="col-4">
                <img class="img--carrito  img-fluid d-flex" src="${prod.imagen}" alt="${prod.nombre} id = "${prod.id}"">
            </div>
            <div class = "col-6">
                <p> Producto: ${prod.nombre} </p>
                <p> Precio $: ${prod.precio} </p>
                <p> Cantidad: ${prod.cantidad} </p>
                <p> <strong> Total $: ${prod.precio * prod.cantidad} </strong></p>
            </div>
            <br>
        </div>
    `
    botonCompra.classList.remove("d-none");
}

function limpiarCarrito(){
    contProduct.innerHTML = `
       
    `
}


let contProduct = document.getElementById("cont__producto");
let botonCarrito = document.querySelector('.btn__carrito');
let botonCompra = document.getElementById('boton__compras');
let subTotal = 0;

botonCarrito.addEventListener('click', ()=>{
    limpiarCarrito();
    for(prod of carrito){
        agregarCarrito(prod);
    }  
});

botonCompra.addEventListener('click', ()=>{
    limpiarCarrito();
    botonCompra.classList.add("d-none");
    contProduct.innerHTML += `
        <form class = "formulario__pago">
            <select class = "m-3 rounded-4" name="cuotas" id="" required>
                <option value="" selected disabled>--Seleccione Cantidad de Cuotas--</option>
                <option value=""> 3 cuotas de $ ${((subTotal/3)).toFixed(2)} pesos </option>
                <option value=""> 6 cuotas de $ ${((subTotal/6)).toFixed(2)} pesos </option>
                <option value=""> 12 cuotas de $ ${((subTotal/12)).toFixed(2)} pesos </option>
            </select>
            <input class = "m-3 rounded-4 p-1 ps-2 col-10 col-lg-8 col-xl-10" placeholder = "Numero de tarjeta"  required> </input>
            <input class = "m-3 rounded-4 p-1 ps-2 col-10 col-lg-2 col-xl-4" placeholder = "mes" type = "number" required> </input>
            <input class = "m-3 rounded-4 p-1 ps-2 col-10 col-lg-2 col-xl-4" placeholder = "año" type = "number" required> </input>
            <input class = "m-3 rounded-4 p-1 ps-2 col-10 col-lg-8 col-xl-10" placeholder = "Nombre del Titular" type = "text" required></input>
            <input class = "m-3 rounded-4 p-1 ps-2 col-10 col-lg-8 col-xl-10" placeholder = "DNI del Titular"  required></input>

            <div class="cont__boton d-flex justify-content-center">
                <button id="boton__pago" class="boton__carrito m-3" type="submit">PAGAR</button>
            </div>
        </form>
    `
    
  
    let formPago = document.querySelector('.formulario__pago');
    formPago.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: ` SU COMPRA FUE CONFIRMADA`,
            text: 'Le enviaremos un correo electronico para poder seguir el pedido',
            showConfirmButton: false,
            timer: 3000,
          });
          setTimeout(()=>{
            location.reload();
          }, 2000);
    })
});
