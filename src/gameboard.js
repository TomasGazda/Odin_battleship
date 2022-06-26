class gameboard{
    #board;
    #ships;
    #floating_ships;
    constructor () {
        this.#floating_ships = 6;
        this.#ships = [];
        this.initboard();
    }

    initboard(){
        this.#board = new Array(9);
        for (let index = 0; index < this.#board.length; index++) {
           this.#board[index] = [0,0,0,0,0,0,0,0,0];
            
        }
    }
    getBoard(){
        return this.#board;
    }
    addship(ship,start,orientation_row){
        let board = JSON.parse(JSON.stringify(this.#board));
        let coordinates = new Array(ship.getlength());
        for (let index = 0; index < ship.getlength(); index++) {
            let coord_x = (orientation_row)?start[0]+index-1:start[0]-1;
            let coord_y = (orientation_row)?start[1]-1:start[1]+index-1;
            if(coord_x>8 || coord_y>8){
                throw 'Cannot put ship outside of gameboard';
            }
            if(board[coord_x][coord_y] == 1){
                throw 'Cannot put on another ship';
            }
            coordinates[index] = [coord_x,coord_y];
            board[coord_x][coord_y]=1;
        }
        this.#ships.push ({'ship_object':ship,'position':coordinates});
        this.#board=JSON.parse(JSON.stringify(board));;
    }
    getships(){
        return this.#ships;
    }

    ship_hit(coordinates){
        const is_hit = (place) => coordinates[0] == place[0]&& coordinates[1] == place[1];

        for (let ind = 0; ind < this.#ships.length; ind++) {
            let element_ship = this.#ships[ind];
            let index = element_ship.position.findIndex(is_hit);
            if(index>-1){
                element_ship.ship_object.sethit(index);
                if(element_ship.ship_object.getsunk() == true){
                    this.#floating_ships-=1;
                    return true;
                }

                break;
            } 
        
        }
        return false;
    }



    incoming_fire(coordinates){
        if( coordinates[0]-1>8||coordinates[1]-1>8){
            throw 'Cannot fire out for gameboard!'
        }
        if(this.#board[coordinates[0]-1][coordinates[1]-1] == 1){
            this.#board[coordinates[0]-1][coordinates[1]-1] = 'X';
            let sunk = this.ship_hit([coordinates[0]-1,coordinates[1]-1]);
            return {'hit':true,'sunk':sunk,'floating':this.#floating_ships};

        }
        this.#board[coordinates[0]-1][coordinates[1]-1] ='X';
        return {'hit':false,'sunk':false,'floating':this.#floating_ships};
    }

    


}

export{gameboard};