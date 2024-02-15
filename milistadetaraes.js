const input = document.getElementById("tarea")
const btn = document.getElementById("btn")
const  lista = document.getElementById("listadetareas")

let tareas = []

btn.addEventListener("click", ()=> {
const agregar = input.value
tareas.push(agregar)
input.value =""

let html = ""
for(let tarea of tareas){
    html += `<li>${tarea} </li>`
}
lista.innerHTML= html
})