import { ship } from "../ship";

test('Creating ship length 3', () => { 
    const object = new ship(3);
    expect(object.getlength()).toBe(3);
    expect(object.getsunk()).toBe(false);
    expect(object.gethit()).toEqual([0,0,0]);
 })

 test('Creating ship length 4', () => { 
    const object = new ship(4);
    expect(object.lenght).toBe(4);
    expect(object.sunk).toBe(false);
    expect(object.hit).toEqual([0,0,0,0]);
 })