import { gameboard } from "../gameboard"
import { ship } from "../ship";

let new_gameboard;
let new_ship;

beforeEach(() => {
    new_gameboard = new gameboard();
    new_ship = new ship(3);
  });

test('Test if gameboard created properly', () => { 
    expect(new_gameboard.getBoard()).toEqual([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);

 })
 describe("test putting ships on gameboard",()=>{
    beforeEach(() => {
        new_gameboard.addship(new_ship,[1,4],true);
      });

    test('Test adding ship',() =>{
    
        expect(new_gameboard.getships()).toEqual([{"position": [[0, 3], [1, 3], [2, 3]], "ship_object": {}}]);
        expect(new_gameboard.getBoard()).toEqual([[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    
    })

     test('Test adding  second ship in right position',() =>{
        let second_ship = new ship(2);
        new_gameboard.addship(second_ship,[3,5],false);
        expect(new_gameboard.getships()).toEqual([{"position": [[0, 3], [1, 3], [2, 3]], "ship_object": {}},{"position": [[2, 4], [2, 5]], "ship_object": {}}]);
        expect(new_gameboard.getBoard()).toEqual([[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
     })
     test('Test adding  second ship outside of game board',() =>{
        let second_ship = new ship(4);
        expect(() =>new_gameboard.addship(second_ship,[3,7],false)).toThrow();
        expect(new_gameboard.getships()).toEqual([{"position": [[0, 3], [1, 3], [2, 3]], "ship_object": {}}]);
        expect(new_gameboard.getBoard()).toEqual([[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    
        
        
     })
     test('Test adding  second ship outside on another ship',() =>{
        let second_ship = new ship(4);
        expect(() =>new_gameboard.addship(second_ship,[1,4],false)).toThrow();
        expect(new_gameboard.getships()).toEqual([{"position": [[0, 3], [1, 3], [2, 3]], "ship_object": {}}]);
        expect(new_gameboard.getBoard()).toEqual([[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    
        
     })

 })

 describe("test of handling incoming fire",()=>{
    beforeEach(() => {
        new_gameboard.addship(new_ship,[1,4],true);
      });

    test('Test fire hits water',()=>{
        
        expect(new_gameboard.incoming_fire([6,8])).toBe(false);
        expect(new_gameboard.getBoard()).toEqual([[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,'X',0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    })
    test('Test fire hits ship',()=>{
        
        expect(new_gameboard.incoming_fire([1,4])).toBe(true);
        expect(new_gameboard.getBoard()).toEqual([[0,0,0,'X',0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    })
    test('Test out of gameboard',()=>{
        
        expect(()=>new_gameboard.incoming_fire([10,10])).toThrow();
        expect(new_gameboard.getBoard()).toEqual([[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    })
 })
 

 

 

