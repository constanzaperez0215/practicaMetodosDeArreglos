// Agregando elementos al arreglo

let superHeroes= [
    "Ironman",
    "Superman",
    "Hawkeye"
]

superHeroes.push("Antman")
superHeroes.unshift("Dr. Strange")
superHeroes.splice(2 , 0, "spiderman")

console.log(superHeroes)

// Agregando y eliminando elementos del arreglo

const usuarios = ["Erick", "Cristian", "Max", "Claudia"];

usuarios.pop()
usuarios.unshift("María José")
usuarios.splice(2 , 1)


console.log(usuarios)

// Buscando el indice de un elemento

const apellidos = ["Aniston", "Cox", "Buffay", "Perry", "LeBlanc", "Schwimmer"]

const indiceDePerry = apellidos.findIndex( apellido => apellido === "Perry" )
console.log(indiceDePerry); 

//////////////7
let actores = [
    { id: 431, nombre: "Jhonny Depp" },
    { id: 124, nombre: "Brad Pitt" },
    { id: 541, nombre: "Leonardo DiCaprio" },
    { id: 664, nombre: "Morgan Freeman" }
];

const indiceEliminarActor = actores.findIndex(actor => actor.id === 541)

actores.splice(indiceEliminarActor,1)

console.log(actores)


// Actividad 3

const peliculas = [
    {id: 1, nombre: "Thor"},
    {id: 2, nombre: "Ant-Man"},
    {id: 3, nombre: "Terminator"},
    {id: 4, nombre: "Ip Man"},
    {id: 5, nombre: "Rocky"},
]

const encontrarPelicula = peliculas.findIndex(pelicula => pelicula.nombre === "Terminator")

peliculas.splice(encontrarPelicula,1)

console.log(encontrarPelicula)
console.log(peliculas)


// Ejemplos iteración de arreglos .forEaach

body = document.querySelector("#container")
const valores = [200, 100, 500, 300, 250]
// valores.forEach(x => body.innerHTML += `<p> ${2* x} </p>`)

// Transformando arreglos .map

//const valores = [200, 100, 500, 300, 250]
const nuevos_valores = valores.map(x => 2* x)
console.log(nuevos_valores)

//  Filtrado de elementos

// const valores = [200, 100, 500, 300, 250]
const valores_filtrados = valores.filter(x => x >= 300)
console.log(valores_filtrados) /* [500, 300] */


const estudiantes = [
    { nombre: "Juan", nota: 3.4 },
    { nombre: "Laura", nota: 6 },
    { nombre: "Katherine", nota: 4.3 },
    { nombre: "Jonathan", nota: 5.4 }
];
const estudiantesAprobados = estudiantes.filter( estudiante => estudiante.nota >= 4.5 )
console.table(estudiantesAprobados)

// Actividad 4: Filtrar y contar

let trabajadores = [
    {nombre: "Contanza", cargo: "Chef"},
    {nombre: "Luis", cargo: "garzón"},
    {nombre: "Estefany", cargo: "Administradora"},
    {nombre: "Andrés", cargo: "Recepcionista"},
    {nombre: "Pedro", cargo: "garzón"},
    {nombre: "Felipe", cargo: "Aseo"},
    {nombre: "Maria", cargo: "garzón"},
    {nombre: "Diego", cargo: "garzón"},
]

const garzones = trabajadores.filter(garzones => garzones.cargo === "garzón")

console.log(garzones.length)
console.table(garzones)


// Unir arreglos .concat

const autosCompactos = [
    {marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
    {marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
    {marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
    {marca: 'Bmw', modelo: '116d', combustible: 'Diesel'},
];
const autosDeportivos = [
    {marca: 'Opel', modelo: 'Astra OPC', combustible: 'Gasolina'},
    {marca: 'Renault', modelo: 'Megane RS', combustible: 'Gasolina'},
    {marca: 'Mitsubishi', modelo: 'Lancer Evo', combustible: 'Gasolina'},
];

const autos = autosCompactos.concat(autosDeportivos);
console.log(autos);

// Ordenar elementos .sort

    //ordenado ascendente 
const arr1 = [4,1,2,3]
const ordenado = arr1.sort()
console.log(ordenado)

    // ordenado descendente
const arr2 = [4,1,2,3]
const ordenado2 = arr2.sort((x,y) => y - x)
console.log(ordenado2)

    // ordenado de objetos

const estudiantes2 = [
    { nombre: "Juan", nota: 3.4 },
    { nombre: "Laura", nota: 6 },
    { nombre: "Katherine", nota: 4.3 },
    { nombre: "Jonathan", nota: 5.4 }
];

const estudiantesOrdenado = estudiantes2.sort((x,y) => x.nota - y.nota)
console.table(estudiantesOrdenado)
