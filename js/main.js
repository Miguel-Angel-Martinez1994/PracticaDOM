//variables donde llamamos a los elementos del DOM
const cuadro =document.querySelector("#contenedor");
const galeriaFotos=document.querySelector("#galeria");

//fragment que usaremos para pintar las imagenes sin sobrecargar
const fragment=document.createDocumentFragment();

//array de las imagenes
const arrayImagenes=[
    {
        id:1,
        src:'assest/viajes-1.jpg',
        alt:'imagen1',
        title:'titulo imagen1'
    },
    {
        id:2,
        src:'assest/viajes-2.jpg',
        alt:'imagen2',
        title:'titulo imagen2'
    },
    {
        id:3,
        src:'assest/viajes-3.jpg',
        alt:'imagen3',
        title:'titulo imagen3'
    },
    {
        id:4,
        src:'assest/viajes-4.jpg',
        alt:'imagen4',
        title:'titulo imagen4'
    },
    {
        id:5,
        src:'assest/viajes-5.jpg',
        alt:'imagen5',
        title:'titulo imagen5'
    },
    {
        id:6,
        src:'assest/viajes-6.jpg',
        alt:'imagen6',
        title:'titulo imagen6'
    },
    {
        id:7,
        src:'assest/viajes-7.jpg',
        alt:'imagen7',
        title:'titulo imagen7'
    }
]

