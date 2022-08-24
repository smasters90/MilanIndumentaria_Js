//for in --> itero objetos
//for of --> itero arrays


//1)
let div = document.getElementById("app"); //Metodo en donde elijo solo 1 solo elemento por id en donde ese id es "app"
let parrafo = document.getElementById("parrafo1");

console.log(div.innerHTML); //innerHtml (en el interior del html) es una propiedad de los elementos en donde me muestra todo lo que contiene
// ese elemento
//en este caso va a mostrar todo el contenido del div con id "app" que seria: <p id="parrafo1"> hola mundo</p>

//en este caso seria: hola mundo
console.log(parrafo.innerHTML);

//2)////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let paises = getElementsByClassName("paises"); // Metodo en donde elijo TODOS los elmentos con el mismo nombre de clase
//como se elijen muchos, la variable "paises" se convierte en un array

//En este caso mosntramos el codigo html dentro de cada elemento del array
console.log(paises[0].innerHTML); //(AR)
console.log(paises[1].innerHTML); //(CL)
console.log(paises[2].innerHTML); //(UY)

//Al usar getElements y guardarse en un array, significa que podemos iterar ese array y mostrarlo
for (pais of paises){
    console.log(pais.innerHTML);
}

//3)///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let titulo = document.getElementById("titulo");
console.log(titulo.innerText); // "Hola mundo!"
titulo.innerHTML = "Hola seba";
console.log(titulo.innerText); // "Hola seba"  
//Con el innerText podemos seleccionar o modificar el contenido textual o el nodo texto de un elemento

//4)/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Con innerHtml tambien me permite cambiar el codigo interno del elemento seleecionado

let contenedor = document.getElementById("contenedor"); //no se muestra nada
//cambio el codigo interno HTML interno
contenedor.innerHTML = "<h2>Hola mundo</h2><p>Lorem ipsum</p>"
//resultado en pantalla: Hola mundo Lorem ipsum. No solo se cambia en pantalla sino tambien se cambia en el html
//El contenido HTML se pasa como string

//className se va a usar para poder asignar a una etiqueta o a varias etiquetas, el nombre de la clase
//Usando el mismo html 4 con el contenedor vacio
let contenedor = document.getElementById("contenedor"); //no se muestra nada
contenedor.innerHTML = "<h2> hola mundo </h2>"
contenedor.className = "filaContenedor" //ahora el div "contenedor" tiene una class llamada "filaContenedor"
//En caso de que yo tenga una clase ya definida, la puedo redefinir o reasignar

////////////////////////////////////////////////////////CREACION DE ELEMENTOS///////////////////////////////////////////////////////////////////////////////
//Crear un nodo de tipo Elemento, etiqueta p
let parrafo2 = document.createElement("p"); //con el metodo createElement recibo por parametro la etiqueta que quiero crear y la guardo en una variable
//Insertar HTML interno
parrafo2.innerHTML = "<h2> hola mundo </h2>" //a esa etiqueta "p", le agrego dentro un "h2"
//Añadir el nodo Element como hijo del body
document.body.append(parrafo2); //con append lo agrego a esta etiqueta con contenido, como hijo del body

///////////////////////////////////////////////////////ELIMINAR ELEMENTOS //////////////////////////////////////////////////////////////////
//de la misma manera podemos eliminar elementos. Tomamos el ejemplo anterior:
 parrafo2.remove(); //elimino toda la etiqueta p (incluyendo el h2 creado dentro de esa etiqueta)

 //5)//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //OBTENER DATOS DE INPUT    USAMOS VALUE
 let nombre = document.getElementById("nombre"); //selecciono el elemento con dicho id y se lo asigno a una variable
 nombre.value //me muestra el valor de ese elemento (en este caso esta vacio)
 //si nosotros escribimos sobre el input en la pantalla ej: seba, al hacer nombre.value nos va a mostrar "seba"
 //ahora que nuestra variable tiene el valor seba, podemos reasignarla:
 nombre.value = "ailen"

 //creo una lista desordenada en html 
//<ul id="personas"> </ul>

//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let lista = document.getElementById("personas");

//Array con la informacion a agregar

let personas = ["HOMERO" , "MARGE" , "BART", "LISA"];

//GUARDAMOS EN LA UL los LI con las personas del array

for(const persona of personas){
    //creamos un <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona;
    lista.appendChild(li);
}

let producto = { id: 1, nombre: "arroz", precio: 125};

let contenedor = document.createElement("div");

contenedor.innerHTML =`<h3> ID: ${producto.id} </h3>
                      <p>  Producto: ${producto.nombre} </p>
                      <b>  Precio: ${poducto.precio} </b>`;

//Agregamos el contenedor creado al body

document.body.appendChild(contenedor);


//CREO UN DIV EN HTML

<div id="contenedor">
    <p class="texto"></p>
</div>

//El metodo querySelector() nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores css
let parrafo2 = document.querySelector("#contenedor p"); // seleccionamos el elemento parrafo dentro del elemento con id "contenedor"
let contenedor = document.querySelector("#contenedor"); // seleccionamos todo el elemento contenedor con id "contenedor"

//o por clase:
parrafo = document.querySelector(".texto");

//Con querySelector puedo ser mas preciso y tomar un nodo por clase y pseudo-clase de css. EJ: en elementos radio o button puedo seleccionar 
//aquel elemento que este en checked
<div>
    <input type="radio" checked class="radio" value="1"></input>
    <input type="radio" class="radio" value="2"></input>
    <input type="radio" class="radio" value="3"></input>
</div>

let radioChecked = document.querySelector(".radio:checked");

//query selecctor solo permite elegir 1 elemento, si quiero elegir muchos elementos, debo usar el metodo querySelectorAll()


//////ENVENTOS/////
//JavaScript lo que hace es escuchar eventos sobre elementos seleccionados. A esta escucha se la conoce como event listener

<div class="contenedor">
    <button id="btnClick">
        Ganaste!
    </button>

</div>

let btnClick = document.getElementById("btnClick");

function handleBtnClick(){
    alert("Ganaste un iphone 13 pro max!!");
}

//Como definir eventos en JS? hay 3 maneras
//Opcion1 con el metodo addEventListener()   Permite definir que evento escuchar sobre cualquier elemento seleccionado

btnClick.addEventListener("click", handleBtnClick); //Esta funcion recibe 2 parametros: 1) un string del nombre del evento que yo quiero escuchar
                                                    //2) la funcion que quiero que corra cuando el evento pase.

//Opcion2 emplear una PROPIEDAD del nodo para definir la respuesta al evento. Esta PROPIEDAD es el nombre del evento con el prefijo "on"
//ej: onclick
btnClick.onclick = handleBtnClick; //como onclick es una propiedad le asignamos la funcion que queremos que realice


/////////////////////////////EJEMPLOS//////////////////////////////////////////
//HTML
<div id="btnConteiner">
    <button id="btnSaludar">
        MUESTRA UN H1 SALUDANDO
    </button>

    <button id="cienAlertasMolestas">
        HAGAS LO QUE HAGAS NO ME DES CLICK
    </button>

    <button id="btnCrearListaDeCompras">
        CREAR UNA LISTA DE COMPRAS
    </button>
</div>

//JS
let btnSaludo = document.getElementById("btnSaludar");

function handleBtnSaludar(){ //creo la funcion para luego llamarla en la escucha
    let header = document.createElement("h1"); //creamos el h1 que nos pide y lo guardamos en una variable
    let conteiner = document.getElementById("conteiner"); //tomamos el contenedor
    header.innerText = "Hola, Bienvenido" // usamos innerText para agregar texto al h1, tambien se puede usar innerHtml pero es solo texto en este caso
    conteiner.append(header); //Hacemos un append (ya que usamos una variable en este caso un div) si lo queremos usar en el body
    //debemos colocar document.body.append(header)
   
}

btnSaludo.addEventListener("click", handleBtnSaludar); //Por ultimo llamamos al metodo para la escucha
///////////////////////////

let btnCienAlertasMolestas = document.getElementById("cienAlertasMolestas");

function handleBtnAlerta(){
    for (let i = 0; i<100; 1++){
        alert("caiste");
    }
}

btnCienAlertasMolestas.addEventListener("click", handleBtnAlerta);
///////////////////////////////////////////////////

let btnCrearListaDeCompras = document.getElementById("btnCrearListaDeCompras");
function crearListaDeCompras(){
    let inputCompras = prompt("Ingrese elementos a comprar");
    let productos = [];
    
    while(inputCompras != "Terminar"){
        productos.push(inputCompras); //Guardamos todos los prodcutos en un array
        inputCompras = prompt("Ingrese elementos a comprar");
    }
    
    let listaDeCompras = document.createElement("ul"); //creamos un ul llamado lista de compras
    
    for(const producto of productos){
        listaDeCompras.innerHTML += `<li>${producto}</li>` //A ese "ul" lo llenamos con "li" de los prodcutos del array
    }
    
    document.body.append(listaDeCompras); //guardamos en el body el "ul" ya terminado
}


btnCrearListaDeCompras.addEventListener("click", crearListaDeCompras);


//mouseup lo que hace es lanzar el evento cuando suelto el click
let button = document.getElementById("btnClick");

button.addEventListener("mouseup",funcion);

//mousedown lo que hace es lanzar el envento cuando aprieto el click
button.addEventListener("mousedown",funcion);

//mouseover lanza el evento cuando el puntero del mouse se mueve sobre el elemento.
button.addEventListener("mouseover", funcion);

//mouseout lanza el evento cuando el puntero del mouse se sale  sobre el elemento.
button.addEventListener("mouseout", funcion);

//mousemove lanza el evento cuando el puntero del mouse se mueve  sobre el elemento.
button.addEventListener("mousemove", funcion);


////Eventos de teclado
//keydown lanza el evento cuando se presiona una tecla y keyup cuando se suelta una tecla
document.body.onkeydown = function ejemplo() {alert ("hola")} ;
document.body.addEventListener("keyup", funcion);

//onchange lanza el evento cuando se detecta un cambio en el valor de un elemento. En el ejemplo escribimos en el input y cuando salimos de
//el input, realiza la accion
<inpunt id="nombre"></inpunt>;
<inpunt id="edad"></inpunt>;

let inputNombre = getElementById("nombre");
let inputEdad = getElementById("edad");

inputNombre.onchange = function mostrar() { alert ("has escrito tu nombre")};


//oninput dispara el evento CADA VEZ que escribo algo
inputNombre.oninput = function mostrar() { alert ("has escrito tu nombre")}; //se disparara un alert por cada "letra" escrita

//evento submit se activa cuando el formulario es enviado. Normalmente se usa para validar formularios
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("subimit", funcion);

//En el eventListener, la funcion se la llama sin los (), en esa funcion el objeto "envent" se pasa por parametro indirectamente.
//Imaginemos que tenemos en html 2 botones para subir y bajar un numero.

function handleContador(e){
    let btn = e.target //trae como objeto el "html" del boton cuando le damos click
    let operacion = btn.innerText; //toma el valor del texto de ese btn (en este caso un "+" o un "-")
    if (opercion == "+"){
        contadorValue++; // es una variable que guarda el valor del numero q sube o baja
        contador.innerText = contadorValue // llenamos el input con el valor.
    } else if (opercion == "-"){
        contadorValue--; // es una variable que guarda el valor del numero q sube o baja
        contador.innerText = contadorValue // llenamos el input con el valor.
    }
}


//STORAGE/////
//Objeto global que te permite almacenar datos de manera local en el navegador
//2 tipos de storage: localStorage y sesionStorage
//localStorage: variable global, los datos se almacenan en el navegador de manera indefinida. La informacion almacenada
//se guarda en forma de "clave-valor". Definimos claves en el storage donde almacenamos valores.

//En el objeto localStorage tenemos un metodo llamado setItem
//Metodo --> localStorage.setitem(clave, valor)
//clave = nombre para identificar el elemento
//valor = valor/contenido del elemento
localStorage.setItem('bienvenida', 'Hola Coder');
localStorage.setItem('unNumero', 20);

//Podemos acceder a la informacion del localStorage usando getItem. Las claves y valores de Storage se guardan en formato
//de cadenas de caracteres
let mensaje = localStorage.getItem('bienvenida');
let numero = localStorage.getItem('unNumero');

//sesionStorage: variable global, los datos se almacenan en el navegador hasta que el user cierra la ventana. Solo existe
//dentro de la pestaña actual, osea, otra pestaña con la misma pagina tendra otro sesionStorage distinto.
//Metodo --> sesionStorage.setitem(clave, valor)
//clave = nombre para identificar el elemento
//valor = valor/contenido del elemento
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('seleccion', [1,2,3]);

//Cabe destacar que getItem siempre devuelve un STRING del valor:
let numeros = localStorage.getItem('seleccion'); //"1,2,3" devuelve un string de los numeros

//Recorrer el storage
for (let i = 0; i< localStorage.length; i++){ 
    let clave = localStorage.key(i); //utilizamos el metodo .key que recibe un parametro numerico como si el storage fuera un array
                                    //y el metodo me devuelve el nombre de la propiedad o "clave"
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}


//Eliminar datos del storage
localStorage.setItem('bienvenida', "Hola Seba");
sessionStorage.setItem("esValido", true);
localStorage.removeItem('bienvenida'); //Removemos a traves del metodo removeItem que recibe como parametro el string de la clave
localStorage.clear(); // Removemos todo el storage con clear



//Almacenar objetos en storage. Para ello usamos json
//Json es usado para enviar y almacenar datos en aplicaciones web. Se puede usar json independientemente de Js
//Cuando sea necesario enviar un objeto al servidor o almacenarlo en el storage, tenemos que convertir ese objeto a JSON
//Para esto, hay 2 propiedades: stringify (acepta un objeto como parametro y devuelve la forma de texto Json)
// Y parse (recibe un texto JSON como parametro y devuelve el objeto JS correspondiente)

//Stringify: propiedad en donde transformamos un objeto JS a un string JSON
const producto2 = { id: 2, producto: "Arroz"};
const enJSON = JSON.stringify(producto2);

console.log(enJSON); // '{ "id": 2, "producto": "Arroz"}' es un string en donde las propiedades van entre "" como string
console.log(typeof producto2); //object
console.log(typeof enJSON); //string

localStorage.setItem('producto2', enJSON);

//Parse hace lo contrario. Propiedad donde recibimos un JSON y devolvemos un objeto JS
let producto = localStorage.getItem('producto2'); //traemos el string (objeto) de tipo JSON
let productoJS = JSON.parse(producto); //ese JSON guardado lo parseamos y lo convertimos en objeto para guardarlo en variable

//Ejemplo:
const productos = [
    {id: 1, producto: "arroz", precio: 100},
    {id: 2, producto: "fideos", precio: 120},
    {id: 3, producto: "leche", precio: 200},
] //tenemos un array de objetos

localStorage.setItem('listaDeProductos', JSON.stringify(productos)); //para guardar el array de objetos en el storage
//usamos set item y como valor pasamos el array pero como tipo JSON
JSON.parse(localStorage.getItem('listaDeProductos')); //Ahora para obtener ese array lo paseamos

//RECUPERAR DATOS: usamos el storage para recuperar datos relacionados a la ultima navegacion del usuario
//para esto, pensamos en inicializar las variables de la app consultando el Storage en el momento del inicio
let usuario;
let usuarioEnLs = localStorage.getItem("usuario") //guardamos el "valor" de la "clave" usuario

if(usuarioEnLs){ //si hay algo almacenado en usuarioEnLs (osea true) (si no hay nada almacenado es null, osea, false)
    usuario = usuarioEnLs; //si hay algo, "inicializamos la variable" usuario para usarla cuando recargamos la sesion.
} else {
    usuario = prompt("Ingrese su nombre de usuario"); //Sino hay nada, le pedimos al cliente que cargue el user
    localStorage.setItem("usuario", usuario); //entonces guardamos ese nombre de usuario en el Storage para futura sesion
}

//otro ej:
let carrito = [];
let carritoEnLs = JSON.stringify(localStorage.getItem("carrito"));

//Inicializo mi app con carrito como array vacio o con el registros que haya quedado en el LocalStorage

if(carritoEnLs){
    carrito = carritoEnLs;
}

//funcion que rederizaria mi carrito
renderCarrito(carrito);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//OPERADOR TERNARIO SINTAXIS:
// condicion ? caso1 : caso2
//La condicion resuelve true o false. En caso1 se escribe la instruccion a ejecutar si la condicion es verdadera y
//en caso 2 si es falsa.
temperatura = 30;
temperatura > 29 ? alert("Dia caluroso") : alert ("Dia agradable");
//El operador ternario ofrece un return implicito para cada caso. Ej:
let usuario2 ={
    nombre: "seba",
    edad: 32,
};
//Realizamos el "if"
let permiso = (usuario.edad>18) ? true : false;
//Mostramos el mensaje
permiso ? alert("puede comprar cerveza") : alert("no puede"); // si permiso es verdadero...tal cosa, sino... tal otra

//&& se usa cuando solo usamos "if" sin los else. Ej:
let carrito2 [];
if (carrito.length==0){
    console.log("el carrito esta vacio");
}

carrito2.length==0 && console.log("el carrito esta vacio"); //Basicamente si la primera parte es verdadera, se ejecuta la 2da
//En caso de que la condicion no se cumpla, siempre devuelve false.
//&& tambien tiene un return implicito. Por lo que ese resultado lo podemos guardar en una variable.

// || devue la condicion verdadera y si ambas son falsas devuelve la utima condicion 

//Si intentaramos acceder a un objeto que no existe naturalmente tendriamos un error. Pero si usamos el operador "?"
//sobre la referencia a un objeto para condicionar su acceso, podemo tener un mejor control:

let usuario3 = null;
console.log(usuario3.nombre3) //da error

console.log(usuario3?.nombre) //da undefined. Con esto de le decimos a js q busque la variable "nombre" en el objeto
//solo si el objeto "usuario" existe

let usuario4 = {
    nombre: 'seba',
    edad: 32,
    curso : {
        javaSript: "aprobado"
    }
}
let existe =usuario4?.curos?.javaScript || "la propiedad no exite" //aca da true por ende devuelve "aprobado"
console.log(existe)

//Desestructuracion: en vez de acceder a las propiedades de un objeto con "let variable = objeto.propiedad "
let {'propiedades'} = objeto

let usuario5 = {
    nombre: 'seba',
    edad: 32,
    curso : {
        javaSript: "aprobado",
        html: "aprobado",
    }
}

let {nombre, edad} = usuario5;
console.log(nombre) //seba

//Si quisiera descontracturar un objeto dentro de un objeto:
let { curso:{javaScript}} = usuario5

//Tambien podemos usarla con funciones:
let usuarioo = {
    nombre: 'seba',
    edad: 32,
    curso : {
        javaSript: "aprobado",
        html: "aprobado",
    }
}

function mostrarPorpiedades({nombre, curso:{html}}){ // aca le paso un objeto. No hace falta poner el = pq cuando llame a la funcion le voy a pasar ese objeto
    console.log(nombre, curso);
}
mostrarPropiedades(usuarioo);


//Podemos desestructurar arrays en donde usamos [] en vez dew {}
//La diferencia es que aca, los nombres entre las [] no tienen que coincidir con el valor del array

let nombres = ["seba", "tati"];
let [a,b]; //si damos console.log aca muestra tati y seba, y ponemos como variable lo q queremos


//SPREAD DE ARRAYS
let nombre = ["seba", "tati"];
console.log(nombre) //me muestra la estructura del array
console.log(...nombre) // me muestra todo el interior del array: "seba" "tati"

//Podemos concatenar 2 array
let numeros1 = [1,2,3];
let unidos = [...nombre, ...numero1];//ahora unidos muestra "seba" "tati" 1 2 3

//tambien podemos hacer spread dentro de un objeto
let nombreObj = {
    ...nombre
}
console.log(nombreObj) // ccomo resultado:
//0; "seba"
//1: "tati"
// usa el indice del array como nombre de la propiedad en el objeto



////////////////////////////////////////////////////////////////////////////////////////////////////////
//LIBRERIAS TOASTIFY es una libreria q nos permite tirar un mensaje push
Toastify({ //recibe por parametro un objeto
    text: 'Mensaje de la notificacion',
    duration: 300, //ms
    gravity: 'bottom', // te indica donde va a salir en el eje y
    position: 'left', //te indica si sale en el borde derecho o izquierdo
    style : {  //objeto que nos permite darle estilo css la notificacion
        background: red,
        textAlign: clearInterval, //en caso de las caracteristicas que en css lleva "-" se remplaza por camelCase
    },
    className: 'contenedorPrincipal', // tambien, en vez de usar style, puedo cargar el estilo css a traves de las clases
    destination: 'www.google.com', //al hacer click sobre el mensaje, te redirecciona a una url q toma de valor
    newWindow: true, // recibe un bolean para decir que ese destination se abra en una pagina nueva o no
    stopOnFocus: true, // lo q hace es resetear el "duration" cuando hacemos "hover" sobre la notificacion
    //en otras palabras, si dejamos el mouse fuera de la notificacion, despues de 3000ms desaparece el mje a menos q posicionemos el mouse sobre el mje
    // y se resetea ese timer.
}).showToast(); // luego llamo al metodo showToast para mostrar la notificacion. Es un metodo de la libreria (son funciones)


//En este caso podemos usar la propiedad onClick para definir una funcion del callback que se ejecuta al clickear el toast
btn.addEventListener('click', () =>{
    Toastify({ 
        text: 'Mensaje de la notificacion',
        duration: 300, //ms
        onClick: () => {
            Toastify({
                text: 'clickeaste un toas',
                duration: 200
            }).showToast()
        }
    }).showToast();
})
//al clickear en un mensaje emergente, sale otro mensaje emergente


//LUXON permite trabajar con fechas y horas de una manera mas sencilla que con Date. Se puede parsear, formatear, sumar y restar fechas, etc
//La clase principal del objeto global luxon, es DateTime. Referenciamos esa clase en una variable:
const DateTime = luxon.DateTime;
//Un DateTime representa un milisegundo especifico en el tiempo


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ASYNC: usamos la funcion setTimeout para realizar acciones asincronicas
setTimeout(()=>{
    console.log("Proceso asincronico");
}, 3000) // se le pasa por parametro una funcion y un tiempo en ms. La funcion se ejecuta luego de que transcurrre ese tiempo
//el tiempo esta en ms

//ej:
let btn = document.querySelector('#boton') //selecciono un btn
let popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', ()=>{
    popup.classList.add('popup-active');

    setTimeout(()=>{
        popup.classList.remove('popup-active');
    }, 2500)
})
// le damos un estilo a ese popup que por ej nos pinte de negro el boton q agregamos y a los 2,5 seg le saque el negro

//setInterval es un metodo donde se le pasa por parametro una funcion que se va a repetir indefinidamente entre un
//lapso de tiempo definido x el 2do parametro

setInterval(()=>{
    console.log('tic tac');
}, 1500); // tic tac se va a imprimir cada 1,5 seg


//PROMISE
//Objeto global o clase que representa a un evento futuro. 
//Se crea una promise a traves de su constructor que recibe por parametro 2 funciones (resolve y reject)
new Promise( (resolve, reject) =>{
    //cuerpo de la promesa
})

//En principio una promesa devuelve el valor de pending

let eventoFuturo = (value) => {
    return new Promise ((resolve, reject) =>{
        if (value ==true){
            resolve ('promesa resuelta')
        } else {
            reject ('promesa no resuelta')
        }
    })
}

console.log(eventoFuturo(true))
console.log(eventoFuturo(false))


//then y catch
let eventoFuturo2 = (value) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            value? resolve('promesa resuelta') : reject('promesa no resuelta');
        }, 2000);
    })
}

eventoFuturo2(true)
    .then( (response)=>{
        console.log(response) //promesa resuelta
    })
//el then se usa para capturar la respuesta en caso de que devuelva resolver

eventoFuturo2(false)
    .catch( (error)=>{ // response es el valor con el q resuelve la promesa, en este caso: "promesa resuelta"
        console.log(error) //promesa no resuelta
    })   

//Tambien tenemos finally que se ejecuta si o si sin importar lo que devuelva la promesa

eventoFuturo2(true)
    .then( (response)=>{
        console.log(response) 
    })
    .catch( (error)=>{
        console.log(error) 
    })   
    .finally( () => {
        console.log('fin del proceso')
    } )
    //Promesa resuelta
    //Fin del proceso



//EJ DE TODO JUNTO:
 
let bd = [
    {id: 1, nombre: 'producto1', precio: 1550},
    {id: 2, nombre: 'producto2', precio: 2550},
    {id: 3, nombre: 'producto3', precio: 3550},
]

let pedirProductos = ()=> { //funcion para pedir productos de la base de datos
    return new Promise( ()=>{ //promise que en 3 seg devuelva con exito la bd
        setTimeout( ()=>{
            resolve(bd)
        }, 3000)
    })
}

let productoss = []; //array vacio

let renderizarProductos = (arr) =>{
    console.log('algoritmo q renderiza los productos') //vamos a renderizar los productos en el dom con el array vacio 
}                                                      // donde va a estar cargado mis productos

pedirProductos() //llamamos a la funcion
.then((res)=>{ //si trae los productos de la base de datos entonces:
    productoss = res //el res: va a ser la bd (linea 636) lo guardamos en el array vacio
    renderizarProductos(productoss) //luego mandamos el array lleno a la funcion
})