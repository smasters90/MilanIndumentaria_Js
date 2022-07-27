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