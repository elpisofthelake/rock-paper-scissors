//a function returned by a computer
let pcount = 0;
let ccount = 0;
let q=parseInt(prompt("How many times do you wanna play?"));
let poop="";
let pp = Math.floor(Math.random()*3) + 1;
function game(){
    let popsicle= "";
    let res="";
    for(let i=1; i<=q ;i++){
        poop = prompt("Jan Ken Pon?");
        popsicle = getComputerChoice(pp);
        res = playRPS(poop , popsicle );
        if(res === "You Win"){
            pcount++;
        }
        else{
            ccount++;
        }
        console.log("Computer Points :",ccount);
        console.log("Player Points : ", pcount);
    }
    if(pcount>ccount){
        console.log("Player wins");
    }
    else{
        console.log("Computer wins");
    }
}

function getComputerChoice(pp){
    let life='';
    if(pp === 1){
        life =  "Rock";
    }
    else if(pp === 2){
        life = "Paper";
    }
    else{
        life = "Scissors";
    }
    return life;
}

function playRPS(playerSelection, computerSelection){
    let value='';
    if(playerSelection === "Rock" && computerSelection === "Paper"){
        value =  "You lose";
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        value = "You lose";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        value =  "You lose";
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        value =  "You win";
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        value =  "You win";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        value = "You win";
    }
    return value;
}
game();