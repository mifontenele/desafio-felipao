class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    definirAtaque() {
        let ataque;
        if (this.tipo == "mago") {
            ataque = "magia";
        } else if (this.tipo == "guerreiro") {
            ataque = "espada";
        }else if (this.tipo == "monge") {
            ataque = "artes marciais";
        } else if (this.tipo == "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "arma não identificada";
        }
        return  ataque;
    }
    atacar() {
        let ataque = this.definirAtaque();
        console.log(`O ${this.tipo} chamado ${this.nome} atacou usando ${ataque}`)
    }
}

let mago = new heroi ("Nicholas Flamel", 600, "mago")
mago.atacar()

let guerreiro = new heroi ("Julio César", 44, "guerreiro")
guerreiro.atacar()

let monge = new heroi ("Buda", 80, "monge")
monge.atacar()

let ninja = new heroi ("Hattori Hanzo", 55, "ninja")
ninja.atacar()

let superman = new heroi ("Superman", 40, "super-heroi")
superman.atacar()