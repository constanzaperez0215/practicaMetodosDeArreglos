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
valores.forEach(x => body.innerHTML += `<p> ${2* x} </p>`)

// Transformando arreglos .map

const nuevos_valores = valores.map(x => 2* x)
console.log(nuevos_valores) 
