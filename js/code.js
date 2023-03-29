const elemento = () => (document.getElementById("elemento").value)
let ElementosArray=[]

function AgregarAArray(elemento){
    ElementosArray.push(elemento)
    console.log(ElementosArray)
    const item=document.createElement("li")
    const itemnuevo=document.createElement("p")
    itemnuevo.innerHTML=elemento
    item.appendChild(itemnuevo)
    const  lista=document.getElementById("resultado")
    lista.appendChild(item)
}

function Agregar(){
    let elem=elemento()
    let resultado
    resultado=elem
    AgregarAArray(resultado)
}
