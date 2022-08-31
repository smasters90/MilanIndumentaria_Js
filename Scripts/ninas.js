function mostrarModal(){
    
    modal.innerHTML = `
    <div class="modalContenedor d-flex flex-column justify-content-around align-items-center mx-auto col-12">
        <div class="modalHeader">
            <h2 class="text-center"> Elije el color:</h2>
        </div>
        <div class="modalBody col-12 text-center">
            <select id="color" required>
                <option value="" selected disabled>--Seleccione Color--</option>
                <option value="gris">GRIS</option>
                <option value="negro">NEGRO</option>
                <option value="azul">AZUL</option>
                <option value="amarillo">AMARILLO</option>
            </select>
            <br>
            <div>
                <label for="cantidad" class="cantidad__nombre mx-2">Cantidad</label>
                <input id="cantidadNinas" type="number" class="cantidad__numero text-center col-2  my-2 col-2" value=0 required>
            </div>
        </div>
        <button class="botonModal">Agregar</button>
        
    </div>
    `
}
function agregar(product){
    const enviarModal = document.querySelector(".botonModal");
    modal.classList.add("cont__modal--show");

    enviarModal.addEventListener("click", (e) => {
        e.preventDefault();
        selectColor = document.getElementById('color').value;
        selectCant = parseInt(document.getElementById('cantidadNinas').value);
        
        if(selectColor == "" || selectCant == 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los campos color y cantidad no deben estar vacios',
              });
        }else {
            if(carrito.some(prod2 => prod2.id == product.id)){
                const index = carrito.findIndex(prod3 => prod3.nombre == product.nombre);
                carrito[index].cantidad = carrito[index].cantidad + selectCant;
            } else {
                product.color = selectColor;
                product.cantidad = selectCant;
                carrito.push(product);
            }

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: ` ${(product.nombre)} agregado correctamente`,
                showConfirmButton: false,
                timer: 2000
              });
        }
        localStorage.setItem('datosProductos', JSON.stringify(carrito));
        modal.classList.remove("cont__modal--show");
        document.body.classList.remove("body--modal");
    })
    document.body.classList.add("body--modal");
}
    


fetch('../Scripts/productos.json')
    .then((productos) => productos.json())
    .then(productosArray =>{
        let arrayProd = productosArray;
        let arrayBtnAgregar = document.querySelectorAll('.btn__agregar');
        let btnElegido;
        
        for(let btn of arrayBtnAgregar){
            btn.addEventListener('click',() =>{
            btnElegido = btn.getAttribute('id');
            for(let product of arrayProd){
                if(product.id == btnElegido){
                    mostrarModal();
                    agregar(product);
                }
            }
            });
        }
    })

let carrito;
let modal = document.querySelector('.cont__modal');
let selectColor;
let selectCant;

localStorage.getItem("datosProductos") ? carrito = JSON.parse(localStorage.getItem("datosProductos")) : carrito = [];

