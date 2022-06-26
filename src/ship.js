class ship{
    #length;
    #sunk;
    #hit = new Array();
    

    constructor (length){
        this.#length = length;
        this.#sunk = false;
        this.setuphitarray();
        
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
        if (position<this.#length || this.#sunk == true){
            this.#hit[position] = 1;

            const checkhits = (field) =>{
                return field == 0
            }
            
            if (!this.#hit.some(checkhits)){
                this.#sunk = true;
            }
        }
    }
    setuphitarray(){
        for (let index = 0; index < this.#length; index++) {
            this.#hit[index]=0;
            
        }
    }

};

export{ship};