let ListaDeFilmes = [
    {titulo:"Homem Aranha no AranhaVerso", avaliaoes:[5,5,5,5]},
    {titulo:"Vingadores Ultimato", avaliaoes:[4,5,5,5]},
    {titulo:"O Mundo incrivel de Gumblle", avaliaoes:[4,2,5,5]}
];

let media = [ListaDeFilmes.avaliaoes];

for(let varrer = 0; varrer < ListaDeFilmes.length; varrer++){
    let soma = 0
    let avaliaoes = ListaDeFilmes[varrer].avaliaoes;

    for(let resultado = 0; resultado < avaliaoes.length;
        resultado++){
            soma += avaliaoes[resultado]
        }
    
    let media = soma / avaliaoes.length;
    
    console.log(media +" "+ ListaDeFilmes [varrer].titulo)
}