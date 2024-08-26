function empacotarpresente(caixas, presentes){
    caixas.sort((x, y)=> x - y)
    presentes.sort((x, y) => x - y)

    let resultado = []
    let caixa = 0
    let presente = 0

    while (presente < presentes.length && caixa < caixas.length){
        if (caixas[caixa] >= presentes[presente]){
            resultado.push([caixas[caixa], presentes[presente]])
            caixa++
            presente++
        }
        else{
            caixa++
        }
    }

    if(presente === presentes.length){
        return resultado
    }
    else{
        return "Não há caixas o suficiente"
    }

}
const empacotando = [
    caixas = [3, 8, 5, 2],
    presentes = [3, 2, 5, 8],
]
console.log(empacotarpresente(caixas, presentes))