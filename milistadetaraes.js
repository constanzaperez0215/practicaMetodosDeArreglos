const input = document.getElementById("tarea")
const btn = document.getElementById("btn")
const  lista = document.getElementById("listadetareas")
const cuentaTareas = document.getElementById("cuenta-tareas")

let tareas = []

btn.addEventListener("click", ()=> {
const agregar = input.value
tareas.push({id: Date.now(), tarea: agregar})
input.value =""

let html = ""
for(let tarea of tareas){
    html += `<li>${tarea.tarea} <button>Eliminar</button> </li>`
}
lista.innerHTML= html
cuentaTareas.textContent = `Total de tareas: ${tareas.length}`;



console.log(tareas)
})




