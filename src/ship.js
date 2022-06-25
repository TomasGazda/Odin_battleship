class ship{
    #length;
    #sunk;
    #hit;
    constructor (length){
        this.#length = length;
        this.#sunk = false;
        this.#hit = [0,0,0]
    }

    getlength(){
        return this.#length;
    }
    getsunk(){
        return this.#sunk;
    }
    gethit(){
        return this.#hit;
    }
    
    sethit(position){
        this.#hit[position] = 1;
        
        if (!this.#hit.some((element)=>{ element == 0})){
            this.#sunk = true;
        }
    }

};

export{ship};