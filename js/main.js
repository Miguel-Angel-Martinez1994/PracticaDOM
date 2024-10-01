//asignacion de los elementos del HTML
const imagenAlt=document.querySelector("#altIMG");

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

const imagenRandom=()=>{
    //generamos numero aleatorio y variables auxiliares
    let aleatorio = Math.floor(Math.random() * array.length);

    //asignamos a imagenALT el src y alt, en base al numero random
    imagenAlt.classList.add("src");
    imagenAlt.classList.add("alt");

    imagenAlt.src=array[aleatorio].src;
    imagenAlt.alt=array[aleatorio].alt;
}

const galeriaImagenes=()=>{

}

//funcion anonima auto-ejecutable para arrancar las funciones
(function (){
    //llamada a las funciones para ejecutarlas
    imagenRandom();
    galeriaImagenes();

})();