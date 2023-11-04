//cadastroHeroi = [nome, XP]
let cadastroHeroi = [ 
    ["ARLEQUINA", 900],           // i=0 ..... e a cada um deste i's do array é formado por outro array com 2 index dentro dele
    ["CAPITÃO AMÉRICA", 1700],    // i=1
    ["THE FLASH", 2600],          // i=2
    ["BATMAN", 4400],             // i=3
    ["HOMEM-ARANHA", 6750],       // i=4
    ["HOMEM DE FERRO", 8500],     // i=5
    ["SUPER-HOMEM", 9500],        // i=6
    ["MULHER MARAVILHA", 10200],  // i=7
];

for (let index = 0; index < cadastroHeroi.length; index++) {
    
    let nomeSelecionado = cadastroHeroi[index]; // para i=1, por exemplo: {nomeSelecionado = [CAPITÃO AMÉRICA, 1700]}
    let nomeHeroi = nomeSelecionado[0];
    let nivelHeroi = nomeSelecionado[1];
    let nivel = "";
    
    if (nivelHeroi <= 1000) {
        nivel = "FERRO"
    } else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
        nivel = "BRONZE"
    } else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
        nivel = "PRATA"
    } else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
        nivel = "OURO"
    } else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
        nivel = "PLATINA"
    } else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
        nivel = "ASCENDENTE"
    } else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
        nivel = "IMORTAL"
    } else {
        nivel = "RADIANTE"
    } 
  
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel + "!.");
}

