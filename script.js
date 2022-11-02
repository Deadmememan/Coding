//start
var board;
var context;
var count = 0;

//arrays
var WordList = ["hi", "yes", "was", "you", "everton", "liverpool", "swansea", "chelsea", "hull", "alien", "dirty-harry", "gladiator", "finding-nemo", "jaws", "manchester", "milan", "madrid", "amsterdam", "prague"];
var CurrentWord = ["test"];
var blank = [];

//Hangman functions
var universalX = 208;
var universalY = 150;
var head = function(){
  context.fillStyle = 'rgba(255,255,255,1)';
  context.beginPath();
  context.arc(universalX+30, universalY+17, 17, 0, 2 * Math.PI);
  context.fill();
  
}

var neck = function(){
  context.fillStyle = 'rgba(255,255,255,1)';
  context.fillRect(universalX+25, universalY+25, 10, 25);
  context.fill();
  context.stroke();
}

var leftarm = function(){
  context.fillStyle = 'rgba(255,255,255,1)';
  context.beginPath();
  context.moveTo(universalX+30, universalY+45);
  context.lineTo(universalX+20, universalY+45);
  context.lineTo(universalX+0, universalY+80);
  context.lineTo(universalX+10, universalY+80);
  context.fill();
}

var rightarm = function(){
  context.fillStyle = 'rgba(255,255,255,1)';
  context.beginPath();
  context.moveTo(universalX+30, universalY+45);
  context.lineTo(universalX+40, universalY+45);
  context.lineTo(universalX+60, universalY+80);
  context.lineTo(universalX+50, universalY+80);
  context.fill();
}

var body = function(){
  context.fillStyle = 'rgba(255,255,255,1)';
  context.beginPath();
  context.fillRect(universalX+17.5, universalY+40, 25, 40);
  context.fill();
  context.stroke();
}

var rightleg = function(){
  context.fillStyle = 'rgba(255,255,255,1)';
  context.fillRect(universalX+32.5, universalY+80, 10, 30);
  context.fill();
  context.stroke();
}

var leftleg = function(){
  context.fillStyle = 'rgba(255,255,255,1)';
  context.fillRect(universalX+17.5, universalY+80, 10, 30);
  context.fill();
  context.stroke();
}

window.onload = function(){
  board = document.getElementById("board");
  
  //picks a random word from the list
  CurrentWord[0] = WordList[Math.floor(Math.random()*WordList.length)]; 
  for(k = 0; k < CurrentWord[0].length+1; k++){
    CurrentWord.push(CurrentWord[0].charAt(k));
  }

  //adds the amount of blanks equal to the length of the word
  for(i = 0; i < CurrentWord[0].length+1; i++){
    blank.push("_ ");
  }
  
  // initalizing board and context for start
  board.height = 500;
  board.width = 500;
  context = board.getContext("2d");

  //updates the function
  setInterval(update, 1000/10);

}

function myFunction(){
  //makes Textinput equal to the text
  var Textinput = document.getElementById("guess").value;
  document.getElementById('Blank').innerHTML = blank[0];
  
//if text equals the word
    if(Textinput == CurrentWord[1]){
      blank[1] = CurrentWord[1];
    } 
    if(Textinput == CurrentWord[2]){
      blank[2] = CurrentWord[2];
    } 
    if(Textinput == CurrentWord[3]){
      blank[3] = CurrentWord[3];
    } 
    if(Textinput == CurrentWord[4]){
      blank[4] = CurrentWord[4];
    } 
    if(Textinput == CurrentWord[5]){
      blank[5] = CurrentWord[5];
    } 
    if(Textinput == CurrentWord[6]){
      blank[6] = CurrentWord[6];
    } 
    if(Textinput == CurrentWord[7]){
      blank[7] = CurrentWord[7];
    } 
    if(Textinput == CurrentWord[8]){
      blank[8] = CurrentWord[8];
    }
    if(Textinput == CurrentWord[9]){
      blank[9] = CurrentWord[9];
    } 
    if(Textinput == CurrentWord[10]){
      blank[10] = CurrentWord[10];
    }
    if(Textinput == CurrentWord[11]){
      blank[11] = CurrentWord[11];
    }
    if(Textinput == CurrentWord[12]){
      blank[12] = CurrentWord[12];
    }
    if(Textinput != CurrentWord[0] && Textinput != CurrentWord[1] && Textinput != CurrentWord[2] && Textinput != CurrentWord[3] && Textinput != CurrentWord[4] && Textinput != CurrentWord[5] && Textinput != CurrentWord[6] && Textinput != CurrentWord[7] && Textinput != CurrentWord[8] && Textinput != CurrentWord[9] && Textinput != CurrentWord[10] && Textinput != CurrentWord[11] && Textinput != CurrentWord[12]){
      count++;
    }
    
    // Checks the Words length and sees how many spaces to add
    if (CurrentWord[0].length == 3){
      blank[0]= blank[1]+blank[2]+blank[3];
    } 
    if (CurrentWord[0].length == 2){
      blank[0]= blank[1]+blank[2];
    } 
    if (CurrentWord[0].length == 3){
      blank[0]= blank[1]+blank[2]+blank[3];
    } 
    if (CurrentWord[0].length == 4){
      blank[0]= blank[1]+blank[2]+blank[3]+blank[4];
    } 
    if (CurrentWord[0].length == 5){
      blank[0]= blank[1]+blank[2]+blank[3]+blank[4]+blank[5];
    } 
    if (CurrentWord[0].length == 6){
      blank[0]= blank[1]+blank[2]+blank[3]+blank[4]+blank[5]+blank[6];
    } 
    if (CurrentWord[0].length == 7){
      blank[0]= blank[1]+blank[2]+blank[3]+blank[4]+blank[5]+blank[6]+blank[7];
    } 
    if (CurrentWord[0].length == 8){
      blank[0]= blank[1]+blank[2]+blank[3]+blank[4]+blank[5]+blank[6]+blank[7]+blank[8];
    } 
    if (CurrentWord[0].length == 9){
      blank[0]= blank[1]+blank[2]+blank[3]+blank[4]+blank[5]+blank[6]+blank[7]+blank[8]+blank[9];
    } 
    if (CurrentWord[0].length == 10){
      blank[0]= blank[1]+blank[2]+blank[3]+blank[4]+blank[5]+blank[6]+blank[7]+blank[8]+blank[9]+blank[10];
    } 
    if (CurrentWord[0].length == 11){
      blank[0]= blank[1]+blank[2]+blank[3]+blank[4]+blank[5]+blank[6]+blank[7]+blank[8]+blank[9]+blank[10]+blank[11];
    } 
    if (CurrentWord[0].length == 12){
      blank[0]= blank[1]+blank[2]+blank[3]+blank[4]+blank[5]+blank[6]+blank[7]+blank[8]+blank[9]+blank[10]+blank[11]+blank[12];
    } 

    if(Textinput == CurrentWord[0]){
      blank[0]= "YOU WIN";
    }
    if(blank[0] == CurrentWord[0]){
      blank[0] = "YOU WIN";
    }
  }

function update() {
//board
  context.fillStyle="gray";
  context.fillRect(0, 0, board.width, board.height);
  
//hangman body
  if(count == 1){
  head();
  } else if(count == 2){
  neck();
  head();
  } else if(count == 3){
  neck();
  head();
  body();
  } else if(count == 4){
  neck();
  leftarm();
  head();
  body();
  } else if(count == 5){
  neck();
  leftarm();
  rightarm();
  head();
  body();
  } else if(count == 6){
  neck();
  rightleg();
  leftarm();
  rightarm();
  head();
  body();
  } else if(count == 7){
  neck();
  rightleg();
  leftleg();
  leftarm();
  rightarm();
  head();
  body();
  
  }



    
  
}
