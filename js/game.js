class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value", 
        function(data){
            gameState=data.val();
        })
    }

    updateState(x){
        database.ref('/').update({
            gameState:x,
        })
    }

    start(){
        player= new Player();
        player.getCount();
        form=new Form();
        form.display();
    }

    play(){
        form.greeting1.hide();
        form.greeting2.hide();
        player.getPlayerInfo();

        if(allPlayers!==undefined){
            for(var plr in allPlayers){
                if(plr==="player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                text(allPlayers[plr].name);
            }
        }
    }
}