class Player{
    constructor(){
        this.position = 0;
    }

    getPosition(){
        return this.position;
    }

    move(){
        this.position = board[dice.throw() + this.position];
    }
}

class Dice{
    throw(){
        return Math.ceil(Math.random()*6);
    }
}

let dice = new Dice();
let player1 = new Player();
let player2 = new Player();
let board = [];

//Rellenar arreglo:
for(let i = 0; i <= 106; i++){
    board[i] = i;
}

//Escaleras:
board[11] = 39;
board[17] = 67;
board[19] = 45;
board[21] = 56;
board[26] = 50;
board[43] = 84;
board[52] = 76;
board[70] = 92;
board[74] = 100;

//Serpientes:
board[96] = 69;
board[93] = 40;
board[83] = 8;
board[78] = 49;
board[75] = 30;
board[62] = 14;
board[36] = 20;
board[22] = 2;
board[18] = 6;

while(player1.getPosition() < 100 && player2.getPosition() < 100){
    player1.move();
    //console.log(player1.getPosition());
    player2.move();
    //console.log(player2.getPosition());
}

if (player1.getPosition() >= 100) {
    console.log("Ganó el jugador 1");
} else {
    console.log("Ganó el jugador 2");
}