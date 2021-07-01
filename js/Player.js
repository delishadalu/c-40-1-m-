class Player{

    getCount(){
        database.ref('playerCount').on("value", (data)=>{
            playerCount= data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    
    update(){
        database.ref('players/player'.this.index).set({
            name:this.index
        })
    }
        
        getPlayerInfo(){
            database.ref('players').on("value",(data)=>{
                allPlayers= data.val();
            })
        }
            
}
