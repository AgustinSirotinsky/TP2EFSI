const elemento = () => (document.getElementById("elemento").value)
const imprimirResultado = tiempo => document.getElementById("tiempo").innerHTML = tiempo
let ElementosArray=[]
let valor=0;
let TiempoMaximo=999999999999999999999999999
let TituloTiempoMaximo=""
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
function CalcularTiempo(elementoElegido){
    let TiempoActual=Date.now()
    console.log(elementoElegido.id)
    let TiempoHastaCerrar=TiempoActual-elementoElegido.id
    console.log(`Tiempo hasta cerrar: ${TiempoHastaCerrar}`)
    console.log(`Tiempo Maximo:${TiempoMaximo}`)
    if(TiempoHastaCerrar<TiempoMaximo){
        TiempoMaximo=TiempoHastaCerrar
        TituloTiempoMaximo=elementoElegido.title
    }
    
}
//Imprime el resultado de que tarea se hizo mas rapido
function ImprimirTiempo(){
    imprimirResultado(`Tarea hecha mas rapida: ${TituloTiempoMaximo}`)
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
  if(evt.target.tagName === "LI") {
    evt.target.classList.toggle("checked");
    console.log(ElementosArray.length)
    console.log(evt.target.id)
    for (let i=0;i<ElementosArray.length;i++){
        console.log(ElementosArray[i].id)
        if (ElementosArray[i].id==evt.target.id){
            CalcularTiempo(ElementosArray[i])
        }
    }
  }
}, false);