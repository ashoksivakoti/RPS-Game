//computer will give an random output function
function getcomputerchoice(){
    const choice = ["rock","paper","sissor"];
    const out = [Math.floor(Math.random()*3)]
    return choice[out]
    }
//player score function
function playround(playerselection,computerselection)
{
let playerscore=0
let computerscore=0

 if ((playerselection==="rock" && computerselection==="sissor") || 
    (playerselection==="paper" && computerselection==="rock") ||
    (playerselection==="sissor" && computerselection==="paper"))
{
        playerscore=1
        console.log("You won "+playerselection+" beats the "+computerselection)
        
}

else 
{
    computerscore=1
    console.log("You lose "+computerselection+" beats the "+playerselection)
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
    let computerselection=getcomputerchoice()
    if(userselection===computerselection)
    {
        console.log("its tie both choose "+computerselection)
        continue
    }
    

        console.log("player-->" + userselection)
        console.log("computer-->" + computerselection)

    playerpoint+= playround(userselection,computerselection)
    roundsplayed++
}
console.log("your score  "+playerpoint)



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