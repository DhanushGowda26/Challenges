//challenge 1
function age(){
var birth_year = prompt("what year you where born?");
var ageindays = (2022-birth_year)*365;
var h1 = document.createElement('h1');
h1.setAttribute('id','age');
var textans = document.createTextNode('you are '+ ageindays+" days old");

h1.appendChild(textans);
document.getElementById('flex-box-result') .appendChild(h1);
}
function reset(){
    document.getElementById('age').remove();
}

//challenge 2
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen')
    image.src = "./media/swag.gif" 
    div.appendChild(image);
}

//challenge 3
function rpsGame(yourChoice){
     console.log(yourChoice);
     var humanChoice, botChoice;
     humanChoice = yourChoice.id;
     botChoice = numberToChoice(randomToRpsInt());
     console.log('computer choice:',botChoice);
     results = decideWinner(humanChoice, botChoice);
     console.log(results)
     message = finalMessage(results);
    rpsFrontEnd(yourChoice.id,botChoice,message);

}

function randomToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissor': 1,'rock': 0.5,'paper':0},
        'paper': {'rock': 1,'paper': 0.5,'scissor':0},
        'scissor': {'paper': 1,'scissor': 0.5,'rock':0}
    };

    var yourScore = rpsDatabase[yourChoice,computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return{'message':'you lost', 'color':'red'};
}       else if (yourScore === 0.5){
        return{'message':'you tied', 'color':'yellow'};    
}       else{
        return {'message':'you won', 'color':'green'}; 
}
}

function rpsFrontEnd(humanChoice,botImagechoice,finalMessage){
    var ImagesDatabase = {
        'rock':document.getElementById('rock').src,
         'paper':document.getElementById('paper').src,
          'scissoe':document.getElementById('scissor').src
    }
    
    document.getElementById('rock').remove();
     document.getElementById('paper').remove();
      document.getElementById('scissor').remove();



}