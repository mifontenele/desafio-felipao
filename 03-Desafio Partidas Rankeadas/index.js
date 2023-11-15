let v = 110;
let d = 5;
let pontuacao = calcularResultado(v,d);
let ranking = atribuirNivel(pontuacao);

function calcularResultado(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

function atribuirNivel(ranking) {
    if (pontuacao <= 10) {
        nivel = "FERRO"
    } else if (pontuacao >= 11 && pontuacao <= 20) {
        nivel = "BRONZE"
    } else if (pontuacao >= 21 && pontuacao <= 50) {
        nivel = "PRATA"
    } else if (pontuacao >= 51 && pontuacao <= 80) {
        nivel = "OURO"
    } else if (pontuacao >= 81 && pontuacao <= 90) {
         nivel = "DIAMANTE"
    } else if (pontuacao >= 91 && pontuacao <= 100) {
         nivel = "LENDÁRIO"
    } else {
        nivel = "IMORTAL"
    }
    return nivel
}
console.log("O Herói tem saldo de " + pontuacao + " e está no nível " + ranking + "!.");







