let playerscore=0
let computerscore=0

const buttons = document.querySelectorAll('button')



//computer will give an random output function
function getcomputerchoice(){
    const choice = ["rock","paper","sissor"];
    const out = [Math.floor(Math.random()*3)]
    return choice[out]
}


function disablebuttons(){
    buttons.forEach(btn => {
        btn.disabled = true
    })
}

//player score function
function playround(playerselection){
    let computerselection=getcomputerchoice()
    let result = ""

    if ((playerselection==="rock" && computerselection==="sissor") || 
    (playerselection==="paper" && computerselection==="rock") ||
    (playerselection==="sissor" && computerselection==="paper")){
        playerscore+=1
        result = ("You win..! "+playerselection+ " beats the "+computerselection+"<br><br> Your score : "+playerscore+"<br> computer score : "+computerscore)

        if (playerscore===5){
            result += ("<br><br>::: You won the game....! :::<br><br>Reload the page to play again :) ")
            disablebuttons()
        }
    }

    else if(playerselection===computerselection){
        result += ("Ooohh It\'s a tie both choose the "+playerselection+"<br><br> Your score : "+playerscore+"<br> computer score : "+computerscore)
    }

    else{
        computerscore += 1
        result += ("You lose "+computerselection+" beats the "+playerselection+"<br><br>Your score : "+playerscore+"<br> computer score : "+computerscore)
    
        if (computerscore===5){
            result += ("<br><br>::: You lose next time better luck :::<br><br>reload the page to play again")
            disablebuttons()
        }
    }
document.getElementById('result').innerHTML=result
return

}
function removeTransition(e){
    if (e.propertyName !=='transform') return;
    this.classList.remove('playing');
}


buttons.forEach(button => {
    button.addEventListener('click',function(){
        playround(button.value)
        button.classList.add('playing')
    })
})
const effect = document.querySelectorAll('.edit')
effect.forEach(btn => btn.addEventListener('transitionend',removeTransition))
