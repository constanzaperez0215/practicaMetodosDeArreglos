const btnAgregar = document.getElementById("agregarInvitado")
const listaDeInvitados = document.getElementById("invitados")
const imput = document.getElementById("nuevoInvitado")

const invitados = []
btnAgregar.addEventListener("click", () => {
    const nuevoInvitado = imput.value
    invitados.push(nuevoInvitado)
    imput.value= ""

    let template = ""
    for(let invitado of invitados){
    template += `<li> ${invitado} </li>`;
    }

    listaDeInvitados.innerHTML=template;
})



