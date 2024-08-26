function organizarFila(vasco){
    return vasco.sort((a,b) =>{
        if (a.idade > b.idade){
            return -1
        } else if (a.idade < b.idade){
            return 1
        } else {
            return 0
        }
    })
}

const fila = [
    {nome: "Ana", idade: 25},
    {nome:"Pedro", idade: 32},
    {nome:"Maria", idade: 29},
    {nome:"João", idade: 32},
    {nome: "Carla", idade: 25},
]

console.log(organizarFila(fila))