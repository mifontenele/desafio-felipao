// METÓDO:
// 1) Nada mais é do que uma função que trabalha no contexto de uma classe

// EXEMPLO CLASSE:
class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    // quando uso função dentro de uma classe não preciso escrever a palavra "function"
    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    assar() {
        console.log(`O bolo de ${this.saborDaMassa} está assando`)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()



