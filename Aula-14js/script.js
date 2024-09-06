
var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var titleSuperior = document.getElementById("title")

var diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta','sabado', 'domingo']


var atualizaRelogio = setInterval(function (){
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDay()

    if(horaAtual < 10)
        horaAtual = "0" + horaAtual

    if(minutoAtual < 10)
        minutoAtual = "0" + minutoAtual

    if(segundoAtual < 10)
        segundoAtual = "0" + segundoAtual

    cumprimento = trocaSaudacao(horaAtual)

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    titleSuperior.textContent = `${diasSemana[diaAtual]}`
}, 1000 )

function trocaSaudacao(hora){
    if(hora <6)
        return 'Boa Madrgada'
    else if( hora < 12)
        return 'Bom Dia'
    else if( hora < 18)
        return 'Boa tarde'
    else
        return 'boa noite'
}

