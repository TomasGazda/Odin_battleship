import { player } from "../player"

test('Test if player is properly created',() => {
    let created_player = new player('test');
    expect(created_player.getname()).toBe('test');
})