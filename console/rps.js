//computer will give an random output function
function computerplay(){
    const choice = ["rock","paper","sissor"];
    const out = [Math.floor(Math.random()*3)]
    return choice[out]
    }
//player score function
function userplay(userselection,computerselection)
{
let playerscore=0
let computerscore=0

 if ((userselection==="rock" && computerselection==="sissor") || 
    (userselection==="paper" && computerselection==="rock") ||
    (userselection==="sissor" && computerselection==="paper"))
{
        playerscore=1
        
}

else 
{
    computerscore=1
    
}
return playerscore
}

//winner decider function

function game(totalrounds=5){
let playerpoint=0
let roundsplayed=0
let i=0
while(roundsplayed<totalrounds){
    
    let userselection=prompt("rock paper or sissor")
        userselection=userselection.toLowerCase()
    if ((userselection!="rock") && (userselection!="paper") && (userselection!="sissor"))
    {
       continue     
    }
    let computerselection=computerplay()
    if(userselection===computerselection)
    {
        console.log("its tie both choose "+computerselection)
        continue
    }
    

        console.log("player-->" + userselection)
        console.log("computer-->" + computerselection)

    playerpoint+= userplay(userselection,computerselection)
    roundsplayed++
}
console.log("total player score "+playerpoint)



if (playerpoint>(roundsplayed/2)){
console.log("you won")
} 
else if(playerpoint<(roundsplayed/2)){
console.log("you lose")
}
else{
console.log("its a draw")
}
}
game()