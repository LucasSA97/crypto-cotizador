const criptoSelect = document.querySelector('#criptomonedas')
const monedaSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

const objBusqueda = {
    moneda:'',
    criptomoneda:''
}

function leerValor(e){
    
    objBusqueda[e.target.name] = e.target.value
    
}

//Promise
const obtenerCriptomonedas = criptomonedas => new Promise ( resolve => {
    resolve(criptomonedas)
})

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas()

    formulario.addEventListener('submit',submitForm )

    criptoSelect.addEventListener('change', leerValor)
    monedaSelect.addEventListener('change', leerValor)
})

function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    fetch(url)
        .then(res => res.json())
        .then(result =>  obtenerCriptomonedas(result.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo

        const option = document.createElement('option')
        option.value = Name
        option.textContent = FullName
        criptoSelect.appendChild(option)
    })
}



function submitForm(e) {
    e.preventDefault()

    //Validar
    const { moneda, criptomoneda } = objBusqueda
    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios')
        return
    }

    //Consultar API
    consultarAPI()

}

function mostrarAlerta(msj) {
    const existeError = document.querySelector('.error')
    if(!existeError){
        const divMsj = document.createElement('div')
        divMsj.classList.add('error')
    
        divMsj.textContent = msj
        formulario.appendChild(divMsj)
        setTimeout(() => {
            divMsj.remove()
        }, 3000);
    }
}

function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    mostrarSpinner()

    fetch(url)
    .then(res => res.json())
    .then(result => {
        mostrarResult(result.DISPLAY[criptomoneda] [moneda])
    })
}

function mostrarResult(result) {

    limpiarHtml()

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = result

    const precio = document.createElement('p')
    precio.classList.add('precio')
    precio.innerHTML = `El precio es <span>${PRICE}</span>`
    formulario.appendChild(precio)

    const precioHigh = document.createElement('p')
    precioHigh.innerHTML = `precio mas alto del dia <span>${HIGHDAY}</span>`

    const precioLow = document.createElement('p')
    precioLow.innerHTML = `precio mas bajo del dia <span>${LOWDAY}</span>`

    const lastHours = document.createElement('p')
    lastHours.innerHTML = `Ultimas horas <span>${CHANGEPCT24HOUR} %</span>`

    const lastUpdate = document.createElement('p')
    lastUpdate.innerHTML = `Actualizacion: <span>${LASTUPDATE}</span>`

    resultado.appendChild(precio)
    resultado.appendChild(precioHigh)
    resultado.appendChild(precioLow)
    resultado.appendChild(lastHours)
    resultado.appendChild(lastUpdate)

}

function limpiarHtml() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function mostrarSpinner(){
    limpiarHtml()
    const spinner = document.createElement('div')
    spinner.classList.add('sk-chase')
    spinner.innerHTML = `  
    <div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>
    `
    resultado.appendChild(spinner)
}


