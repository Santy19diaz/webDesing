//querySelector
const heading = document.querySelector('.header__texto h2');// retorna 0 o un elemento
//heading.textContent = "nuevo proyecto"; cambia el texto
heading.classList.add('nueva-clase'); //crea nueva clase
//querySelectorAll\
//const enlaces = document.querySelectorAll('.navegacion a');//funciona como un arreglo de enlaces

//generar html con create element
const nuevoEnlace = document.createElement('A');//etiqueta en mayúsculas

//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
//agregar texto
nuevoEnlace.textContent = 'Comprar café';

//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)//lo añade como hijo de la clase

//inputs y text area
const datos ={
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


function leerTexto(e){
    datos[e.target.id] = e.target.value;
}

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//evento submit

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //validar

    const {nombre,email,mensaje}= datos;

    if(nombre=== ''||email===''||mensaje===''){
        mostrar('todos los campos son obligatorios',true);
        return;
    }
    mostrar('enviando formulario');

});


function mostrar(mensaje,error = null){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    },5000)
}
