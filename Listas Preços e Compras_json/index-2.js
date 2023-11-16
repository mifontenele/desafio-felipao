let listaDeCompras = {
    frutas: {
    0: ["uva", 9.99],
    1: ["banana", 4.59],
    2: ["laranja", 6.79]
    },
    bebibas: "agua de côco"
}

gerarListaDeCompras(listaDeCompras)

function gerarListaDeCompras(listaDeCompras){
    console.log(`As frutas compradas foram:`)  
    for(let index in listaDeCompras.frutas){
    let [itemName, itemPrice] = listaDeCompras.frutas[index]
    console.log(`- ${itemName}:  R$ ${itemPrice}`)
    }
}