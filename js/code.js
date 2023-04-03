const elemento = () => (document.getElementById("elemento").value)
let ElementosArray=[]
let valor=0;
//Agregar los valores al array
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
//Calcula tiempo desde que se creo hasta que se cerro
function CalcularTiempo(tiempoDeId){
    let horaActual=Date.now()
}
//Activado por el boton
function Agregar(){
    let elem=elemento()
    let resultado
    resultado=elem
    AgregarAArray(resultado)
}
//Tachar elementos clickeados
var list = document.querySelector('ul');
list.addEventListener('click', function(evt) {
  console.log("lista clickeada");
  if(evt.target.tagName === "LI") {
    evt.target.classList.toggle("checked");
    for(let i=0;i<=ElementosArray.length;i++){
        if(evt.target.id==ElementosArray[i].id){
            CalcularTiempo(ElementosArray[i].id)
        }
    }
  }
}, false);