const btnAgregar = document.getElementById("agregarInvitado")
const listaDeInvitados = document.getElementById("invitados")
const imput = document.getElementById("nuevoInvitado")

const invitados = []
btnAgregar.addEventListener("click", () => {
    const nuevoInvitado = imput.value
    invitados.push({id: Date.now(), nombre: nuevoInvitado})
    imput.value= ""


    let template = ""
    for(let invitado of invitados){
    template += `<li> ${invitado.nombre} <button onclick="borrar(${invitado.id})">Eliminar</button> </li>`;
    }

    listaDeInvitados.innerHTML=template;
    console.log(invitados)
})


function borrar (id){
    const index = invitados.findIndex((ele) => ele.id == id)
    invitados.splice(index,1)

    let template = ""
    for(let invitado of invitados){
    template += `<li> ${invitado.nombre} <button onclick="borrar(${invitado.id})">Eliminar</button> </li>`;
    }

    listaDeInvitados.innerHTML=template;
}




