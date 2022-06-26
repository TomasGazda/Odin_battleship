import { ship } from "../ship";

test('Creating ship length 3', () => { 
    const object = new ship(3);
    expect(object.getlength()).toBe(3);
    expect(object.getsunk()).toBe(false);
    expect(object.gethit()).toEqual([0,0,0]);
 })

 test('Creating ship length 4', () => { 
    const object = new ship(4);
    expect(object.getlength()).toBe(4);
    expect(object.getsunk()).toBe(false);
    expect(object.gethit()).toEqual([0,0,0,0]);
 })

 describe('Testing methods of ship class',()=>{
    let created_ship;
    beforeEach(()=>{
        created_ship = new ship(3);
        
    })
    test('Test hit function on last', () => { 
        created_ship.sethit(2);
        expect(created_ship.gethit()).toEqual([0,0,1]);
     })
     test('Test hit function on middle', () => { 
        created_ship.sethit(1);
        expect(created_ship.gethit()).toEqual([0,1,0]);
     })
     test('Test hit function outside of range', () => { 
        created_ship.sethit(3);
        expect(created_ship.gethit()).toEqual([0,0,0]);
     })
     
     test('Test sunk func if ship got hit once', () => { 
        created_ship.sethit(0);
        expect(created_ship.getsunk()).toBe(false);
     })

     test('Test sunk func if ship got hit twice', () => { 
        created_ship.sethit(0);
        created_ship.sethit(1);
        expect(created_ship.getsunk()).toBe(false);
     })
     test('Test sunk func if ship got hit three times', () => { 
        created_ship.sethit(0);
        created_ship.sethit(1);
        created_ship.sethit(2);
        expect(created_ship.getsunk()).toBe(true);
     })
     test('Test hit hunction after hitting spot twice', () => { 
        created_ship.sethit(0);
        created_ship.sethit(1);
        created_ship.sethit(2);
        created_ship.sethit(1);
        expect(created_ship.gethit()).toEqual([1,1,1]);
     })

 })