//variables donde llamamos a los elementos del DOM
const cuadro =document.querySelector("#cabecera");
const galeriaFotos=document.querySelector("#contenedor");
const galeriaTxt=document.querySelector("#galeria");
const imagen=document.querySelector("img");

//fragment que usaremos para pintar las imagenes sin sobrecargar
const fragment=document.createDocumentFragment();

//array de las imagenes
const array=[
    {
        id:1,
        title:'titulo imagen1',
        src:'assest/viajes-1.jpg',
        alt:'imagen1'
    },
    {
        id:2,
        title:'titulo imagen2',
        src:'assest/viajes-2.jpg',
        alt:'imagen2'
    },
    {
        id:3,
        title:'titulo imagen3',
        src:'assest/viajes-3.jpg',
        alt:'imagen3'
    },
    {
        id:4,
        title:'titulo imagen4',
        src:'assest/viajes-4.jpg',
        alt:'imagen4'
    },
    {
        id:5,
        title:'titulo imagen5',
        src:'assest/viajes-5.jpg',
        alt:'imagen5'
    },
    {
        id:6,
        title:'titulo imagen6',
        src:'assest/viajes-6.jpg',
        alt:'imagen6'
    },
    {
        id:7,
        title:'titulo imagen7',
        src:'assest/viajes-7.jpg',
        alt:'imagen7'
    }
]

/*
const cuadro =document.querySelector("#cabecera");=>Lugar donde ira el titulo
const galeriaFotos=document.querySelector("#contenedor");=>contenedor donde se alojara la imagen random
const imagen=document.querySelector("img");=>imagen que sera la imagen random
--------------------------------------------------------------
const galeriaTxt=document.querySelector("#galeria");=>contenedor donde se mostraran todas las imagenes como si de una galeria se tratara
*/
const imagenAleatoria=()=>{
    //generamos numero aleatorio
    let aleatorio = Math.floor(Math.random() * arrayImagenes.length);

    //recorremos el array
    array.forEach((item)=>{
        //creamos y asignamos a un parrafo el texto del titulo de la foto random
        const titulo=document.createElement("P");
        titulo.textContent=item.title;

        imagen.src=item.src;
        imagen.alt=item.alt;
    })
}

imagenAleatoria();

