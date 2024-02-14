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