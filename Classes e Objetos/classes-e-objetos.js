// CLASSES:
// 1) Uma CLASSE padroniza o formato de uma estrutura de dados
// 2) Um OBJETO criado a partir de uma classe, ou seja, tem a mesma estrutura de dados mas
// vai poder implmentar propriedades (valores) diferentes
// 3) JSONs são utilizados para trabalhar ENTRE aplicações diferentes JÁ QUE É LINGUAGEM UNIVERSAL, LEVE E SIMPLES
// 4) CLASSES são mais utilizadas para trafegar contextos de informações de parte para a outra dentro da aplicação ou
// 5) A partir de uma classe podemos declarar (o termo correto utilizado é INSTANCIAR) um OBJETO, que significa
//exatamente conferir propriedades específicas a partir de uma CLASSE que pode vir a ter vários objetos instanciados
// a partir dela

// OBJETOS:
// A grosso modo, qualquer coisa que pode ser transportada do mundo real para um computador
// Quando falamos em representação de objeto é qual coisa que estamos representando no mundo da programação
// 

// EXEMPLO CLASSE:
class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
}

// EXEMPLO OBJETO:
let boloFesta = new formaDeBolo("massa de chocolate", "nutella")
console.log(boloFesta)

// construindo um método dentro da classse

