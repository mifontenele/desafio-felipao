// JSON - JavaScript Object Notation
// JSON é considerado um protocolo de comunicação e de transferencia de dados que pode ser utulizado por todas as linguagens.
// Os dados são agrupados e podem ser transferidos de forma muito mais fácil de uma aplicação para outra.
// chave e valor com o objetivo de transferir dados

let invoice = {
	name: "Milena", 
    surname: "Fontenele",
    phone: "85 98801-0048",
    email: "milenafontenele@hotmail.com",
    products: {
    	0: ["mouse", 29.99], 
        1: ["teclado", 129.99],
        2: ["monitor", 899.99]
        },
 	taxes: 98.90,
}

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O comprador é ${invoice.name} ${invoice.surname}`)
    console.log(`O telefone é ${invoice.phone}`)
    console.log(`O email é ${invoice.email}`)
    console.log("--------------------------------------------------")
    console.log(`Os produtos adquiridos são:`)
    
    for(let index in invoice.products){
    	let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}:  R$ ${productPrice}`)
    }
}