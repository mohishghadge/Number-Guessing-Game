let computerGuess;
let userGuess = [];
const userGuessUpdate  = document.getElementById("range");
const userNumberUpdate = document.getElementById("inputBox")

let audio = new Audio('./audio/tune.mp3');

const attempts = document.getElementById("attempts"); 


const init =()=>{
    computerGuess =Math.floor(Math.random()* 100);
    console.log(computerGuess)

    document.getElementById("newGamebtn").style.display = "none";
    document.getElementById("gamearea").style.display = "none";

};


const startGame=()=>{
    document.getElementById("welcomeScreen").style.display = "none";

    document.getElementById("gamearea").style.display = "block";

};
    
const startNewGame =()=>{
    document.getElementById("newGamebtn").style.display = "inline";  
    userNumberUpdate.setAttribute ('disabled',true);     
}


const compareGuess =()=>{
     audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess =  [...userGuess,userNumber]

    document.getElementById("guesses").innerHTML = userGuess;

    // check the value is low or high
    if(userGuess.length < maxGuess){
        if(userNumber >computerGuess){
            userGuessUpdate.innerText = "Guessed Value is high";
            userNumberUpdate.value ='';
        
        }
        else if(userNumber < computerGuess){
            userGuessUpdate.innerText = "Guessed value is low";
            userNumberUpdate.value ='';
        }
        else if(userNumber === computerGuess){
            userGuessUpdate.innerText = "You are correct";
            userNumberUpdate.value ='';
            startNewGame();
        }
    }
    else{
        if(userNumber >computerGuess){
            userGuessUpdate.innerText = `Your Loose!! Correct number was ${computerGuess}`;
            userNumberUpdate.value ='';
            startNewGame();

        }
        else if(userNumber < computerGuess){
            userGuessUpdate.innerText = `Your Loose!! Correct number was ${computerGuess}`;
            userNumberUpdate.value ='';
            startNewGame();
        }
        else if(userNumber === computerGuess){
            userGuessUpdate.innerText = "You are correct";
            userNumberUpdate.value ='';
            startNewGame();
        }
    }
  
    attempts.innerHTML = userGuess.length;
    
}


const easyMode=()=>{
    audio.play();
    maxGuess = 10;
    startGame();
}

const hardMode=()=>{
     maxGuess = 5;
    audio.play();  
    startGame();

}

                      


const newGame = () =>{
    window.location.reload();
    audio.play();
} 