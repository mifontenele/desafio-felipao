

let nivelHeroi = [
    ["ARLEQUINA", 900],
    ["CAPITÃO AMÉRICA", 1700],
    ["THE FLASH", 2600],
    ["BATMAN", 4400],
    ["HOMEM-ARANHA", 6750],
    ["HOMEM DE FERRO", 8500],
    ["SUPER-HOMEM", 9500],
    ["MULHER MARAVILHA", 10200],
];


for (let index = 0; index < nivelHeroi.length; index++) {
    
    const nome = nivelHeroi[index];
    
    if (nivelHeroi[index][2] <= 1000) {
        let classificacao = "FERRO"
    } else if (nivelHeroi[index][2] >= 1001 && nivelHeroi[index][2] <= 2000) {
        classificacao = "BRONZE"
    } else if (nivelHeroi[index][2] >= 2001 && nivelHeroi[index][2] <= 5000) {
        classificacao = "PRATA"
    } else if (nivelHeroi[index][2] >= 5001 && nivelHeroi[index][2] <= 7000) {
        classificacao = "OURO"
    } else if (nivelHeroi[index][2] >= 7001 && nivelHeroi[index][2] <= 8000) {
        classificacao = "PLATINA"
    } else if (nivelHeroi[index][2] >= 8001 && nivelHeroi[index][2] <= 9000) {
        classificacao = "ASCENDENTE"
    } else if (nivelHeroi[index][2] >= 9001 && nivelHeroi[index][2] <= 10000) {
        classificacao = "IMORTAL"
    } else {
        classificacao = "MERDA"  // TO DO: Mudar para "RADIANTE" depois de achar a merda que eu fiz aqui neste if
    } 

    console.log("O Herói de nome " + nome + " está no nível de " + classificacao + "!.");
}

