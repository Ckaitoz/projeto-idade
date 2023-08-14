function idade(){
    var dia = document.getElementById('dia')
    var mes = document.getElementById('mes')
    var ano = document.getElementById('ano')
    var resul = document.getElementById('res')

    var calcdata = new Date()
    var calcano = calcdata.getFullYear()
    var calcmes = calcdata.getMonth()
    var calcdia = calcdata.getDay()

    if (ano.value.length == 0 || Number(ano.value) > calcano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')}
        else{
            var verAno = calcano - Number(ano.value)
            var verMes = calcmes - Number(mes.value) 
            var verDia = calcdia - Number(dia.value)

            resul.innerHTML = `<div>${verAno} <p>Years</p> <br>
            ${verMes} <p> Months </p> <br>
            ${verDia} <p> Days </p>  <div>`
            
        }
}