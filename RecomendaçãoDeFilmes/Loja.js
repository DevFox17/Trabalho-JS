const operacoes = [
    { tipo: "Adicionar", produto: "Maçã", quantidade: 10 },
    { tipo: "Adicionar", produto: "Banana", quantidade: 5 },
    { tipo: "Comprar", produto: "Maçã", quantidade: 3 },
    { tipo: "Comprar", produto: "Laranja", quantidade: 2 },
    { tipo: "Adicionar", produto: "Laranja", quantidade: 7 },
    { tipo: "Comprar", produto: "Banana", quantidade: 5 }
  ];

function atualizarInventario(operacoes){
    const inventario = {};

    for(const operacao of operacoes){
        const {tipo, produto, quantidade} = operacao

        if(tipo === "Adicionar"){
            if(inventario[produto]){
                inventario[produto] += quantidade
            }
            else{
                inventario[produto] = quantidade
            }
        }
        else if(tipo === "Comprar"){
            if (inventario[produto]){
                inventario[produto] -= quantidade

            if (inventario[produto] <= 0){
                delete inventario[produto]

            }
                
            }
        }
    }
    return inventario;
}

console.log(atualizarInventario(operacoes))