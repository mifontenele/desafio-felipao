//cadastroHeroi = [nome, pontos]
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
    
    let nomeHeroi = cadastroHeroi[index][0];
    let pontosHeroi = cadastroHeroi[index][1];
    let nivel = "";    
    
    pontosHeroi <= 1000) {
        nivel = "FERRO"
    } else pontosHeroi >= 1001 && pontosHeroi <= 2000) {
        nivel = "BRONZE"
    } else pontosHeroi >= 2001 && pontosHeroi <= 5000) {
        nivel = "PRATA"
    } else pontosHeroi >= 5001 && pontosHeroi <= 7000) {
        nivel = "OURO"
    } else pontosHeroi >= 7001 && pontosHeroi <= 8000) {
        nivel = "PLATINA"
    } else pontosHeroi >= 8001 && pontosHeroi <= 9000) {
        nivel = "ASCENDENTE"
    } else pontosHeroi >= 9001 && pontosHeroi <= 10000) {
        nivel = "IMORTAL"
    } else {
        nivel = "RADIANTE"
    } 
  
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel + "!.");
}
