import "./assets/style.css";
import "./assets/singleplayers.css";




document.getElementById('singleplayer').addEventListener('click',function(){
    document.getElementById('game_mode').style.display = 'none';
    document.getElementById('player_2').style.display = 'none';
    document.getElementById('players').style.display = 'flex';

});

$('#start_game').click(function(){

});
$("#carrier").on("dragstart",function(ev){
    ev.originalEvent.dataTransfer.effectAllowed = 'move';
    ev.originalEvent.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.originalEvent.dataTransfer.setDragImage(ev.target,0,0);
    return true;
});