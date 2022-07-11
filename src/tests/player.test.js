import { player } from "../player"

test('Test if player is properly created',() => {
    let created_player = new player('test',false);
    expect(created_player.getname()).toBe('test');
})
test('Test if player is computer',() => {
    let created_player = new player('test',true);
    expect(created_player.iscomputer()).toBe(true);
})
test('Test if player is computer',() => {
    let created_player = new player('test',false);
    expect(created_player.iscomputer()).not.toBe(true);
})
test('Test make move',() =>{
    let created_player = new player('test',false);
    created_player.move([1,4]);
    expect(created_player.last_moves()).toEqual([[1,4]]);
})
test('Test posibility of move move',() =>{
    let created_player = new player('test',false);
    
    expect(created_player.ispossible([1,4])).toBe(true);
})
test('Test posibility of move move',() =>{
    let created_player = new player('test',false);
    created_player.move([1,4]);
    expect(created_player.ispossible([1,4])).toBe(false);
})