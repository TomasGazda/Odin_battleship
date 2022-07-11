import { gameboard } from "./gameboard"

class player{
    #name;
    #is_computer;
    #last_moves;
    constructor(name,is_computer){
        this.#name = name;
        this.#is_computer = is_computer;
        this.#last_moves = [];
    }
 

    getname(){
        return this.#name;
    }
    iscomputer(){
        return this.#is_computer;
    }

    move(coordinates){
        this.#last_moves.push(coordinates);
    }
    ispossible(coordinates){
        const played = (element) => element[0] == coordinates[0] && element[0] == coordinates[0];
        return !this.#last_moves.some(played);
    }
    last_moves(){
        return this.#last_moves;
    }




}

export{player};