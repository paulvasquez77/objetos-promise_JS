const prueba = {
    nombre: 'jean',
    apellido: 'paul',
    edad: '29',
}

const objeto = {
    nombre: "HTML",
    duracion: 15,
    estado: true,
};

const copia = {
    prueba: { ...prueba },
    objeto: { ...objeto }
}
console.log(copia);

prueba.nombre = 'paul'

const nuevoObjeto = {
    ...prueba,
    nuevo: 'zapato'
}

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

Object.freeze(producto)
Object.seal(producto)
//reescribe un valor
producto.nombre = 'monitor'

//sino existe, lo va a crear
producto.imagen = 'imagen.jpg'

//elimina una propiedad
delete producto.disponible
console.log(producto);


const autenticado = true
const usuario = 'jean'

const saldo = 600
const pagar = 500
const tarjeta = true

saldo > pagar || tarjeta ? console.log('puede pagar con saldo o tarjeta') : console.log('no se puede pagar');


// scope bloque
function nombreFuncion() {
    if (true) {
        const animal = 'gato'
        console.log(animal);
    }
}
nombreFuncion()

//promise
// const url = 'https://rickandmortyapi.com/api/character'
// fetch(url)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data.results);
// })
// .catch((error) => {
//     console.log(error);
// })


// promise.all
const url = 'https://rickandmortyapi.com/api/character'
const url2 = 'https://rickandmortyapi.com/api/episode'
const datosAsincronos = async () => {
    const [response, response2] = await Promise.all([fetch(url), fetch(url2)])
    const data = await response.json()
    const data2 = await response2.json()
    console.log(data);
    console.log(data2);
}
datosAsincronos()