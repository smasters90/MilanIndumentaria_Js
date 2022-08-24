function agregarPalazo(){
    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");
    input3 = document.getElementById("input3");
    cant = document.getElementById("cantidad");
    colores = document.getElementById("color");

    input1.addEventListener('click', () =>{
        talles = input1.value;
        });
    input2.addEventListener('click', () =>{
        talles = input2.value;
    });
    input3.addEventListener('click', () =>{
        talles = input3.value;
    });
   
    let talleAct = talles;

    colorAct = document.getElementById("color").value;

    cantidadAct = parseInt(document.getElementById("cantidad").value);

    let palazoAfra = {id: 1, nombre:'Palazo Afra', precio:6050, color: colorAct, talle: talleAct, categoria:'mujer', cantidad:cantidadAct, imagen:"../img/pantalovestirmujer.png"};

    if(palazoAfra.color == "" || palazoAfra.talle == "" ||  palazoAfra.cantidad == 0){
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Falta completar algun dato',
            showConfirmButton: false,
            timer: 1500
            })
    } else {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Pruducto agregado correctamente!',
            showConfirmButton: false,
            timer: 1500
        });

        if(carrito.some(prod => prod.id == palazoAfra.id)){
            const index = carrito.findIndex(producto => producto.nombre == 'Palazo Afra');
            carrito[index].cantidad = carrito[index].cantidad +cantidadAct;
        } else {
            carrito.push(palazoAfra)
        }
        
        localStorage.setItem('datosProductos', JSON.stringify(carrito));
        colores.value = "";
        cant.value = 0;
        talles = "";
    }   
}

function agregarTapado(){
    input1 = document.getElementById("input4");
    input2 = document.getElementById("input5");
    input3 = document.getElementById("input6");
    cant= document.getElementById("cantidad2");
    colores = document.getElementById("color2");

    input1.addEventListener('click', () =>{
        talles = input1.value;
        });
    input2.addEventListener('click', () =>{
        talles = input2.value;
    });
    input3.addEventListener('click', () =>{
        talles = input3.value;
    });

    let talleAct = talles;

    colorAct = document.getElementById("color2").value;

    cantidadAct = parseInt(cant.value);

    let tapadoHimalaya = {id:2, nombre:'Tapado Himalaya', precio:37485, color: colorAct, talle: talleAct, categoria: 'mujer', cantidad: cantidadAct, imagen: "../img/tapado.jpeg"};

    if(tapadoHimalaya.color == "" || tapadoHimalaya.talle == "" ||  tapadoHimalaya.cantidad == 0){
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Falta completar algun dato',
            showConfirmButton: false,
            timer: 1500
            })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pruducto agregado correctamente!',
            showConfirmButton: false,
            timer: 1500
        });
       
        if(carrito.some(prod => prod.id == tapadoHimalaya.id)){
            const index = carrito.findIndex(producto => producto.nombre == 'Tapado Himalaya');
            carrito[index].cantidad = carrito[index].cantidad +cantidadAct;
        } else {
            carrito.push(tapadoHimalaya)
        }
        
        localStorage.setItem('datosProductos', JSON.stringify(carrito));
        
        colores.value = "";
        cant.value = 0;
        talles = "";
    }
    console.log(carrito)
}


let input1; 
let input2; 
let input3; 
let colores; 
let cant;
let talles;
let colorAct;
let cantidadAct;


let botonPalazo = document.getElementById("boton__agregarPalazo");
botonPalazo.addEventListener('click', agregarPalazo);

let botonTapado = document.getElementById("boton__agregarTapado");
botonTapado.addEventListener('click', agregarTapado);

localStorage.getItem("datosProductos") ? carrito = JSON.parse(localStorage.getItem("datosProductos")) : carrito = [];





