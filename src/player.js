import { gameboard } from "./gameboard"

class player{
    #name;
    #own_board;
    #oponent_board;
    constructor(name){
        this.#name = name;
        this.#own_board = new gameboard();
        this.#oponent_board = new gameboard();


    }

    getname(){
        return this.#name;
    }

}

export{player};