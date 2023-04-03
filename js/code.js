const elemento = () => (document.getElementById("elemento").value)
let ElementosArray=[]
let valor=0;
function AgregarAArray(elemento){
    let hora=Date.now()
    const elementoCompleto
    ={
        id:hora,
        title:elemento,
        value:valor
    }
    valor++,
    console.log(valor)
    ElementosArray.push(elementoCompleto)
    console.log(ElementosArray)
    const item=document.createElement("li")
    item.id=hora
    const itemnuevo=document.createElement("p")
    itemnuevo.innerHTML=elemento
    item.appendChild(itemnuevo)
    const  lista=document.getElementById("resultado")
    lista.appendChild(item)
    console.log(ElementosArray)
}
function CalcularTiempo(tiempoDeId){

}
function Agregar(){
    let elem=elemento()
    let resultado
    resultado=elem
    AgregarAArray(resultado)
}
var list = document.querySelector('ul');
list.addEventListener('click', function(evt) {
  console.log("lista clickeada");
  if(evt.target.tagName === "LI") {
    evt.target.classList.toggle("checked");
    console.log(evt.target.id)
    for(let i=0;i<=ElementosArray.length;i++){
        if(evt.target.id==ElementosArray[i].id){

        }
    }
  }
}, false);