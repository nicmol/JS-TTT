// start with these global variables
var xIsNext = true;//keeps track of whos turn it is
var winner = null;//keeps track of the winner
var squares = Array(9).fill(null);//keeps track of the state of the board
var winningLine = Array();//keeps track of where the winning line is
var lines = [ //all possible ways to win
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

function init()
{
   
    // Add an onclick handler to all of the squares
    // The name attribute for all of the divs is square
    // Use the function handleClick to handle the event 
   var boardSquares = document.getElementsByName("square");
   for(i=0;i < boardSquares.length; i++){
    //boardSquares[i].onClick = handleClick;
    boardSquares[i].addEventListener("click", handleClick);
       
   }
  
}

function handleClick() {
 
   
    // Get the id from the square and put it in a variable
    // Remember that the id is an integer 0 - 8
 
    var i = this.id;
   
    //alert(i);  
    // Set the element in the squares array to the player's symbol
    // Update the inner html for this square in the UI
    // Set the onclick handler for this square in the UI to an empty anonymous function or arrow function
    // Update the variable xIsNext
    
    if(!xIsNext){
        squares[i] = "O";
        document.getElementById("status").innerHTML = "<h1>Next Player: X</h1>";
        document.getElementById(i).innerHTML = "<h1>O</h1>";
       }
    if(xIsNext){
        squares[i] = "X";
        document.getElementById("status").innerHTML = "<h1>Next Player: O</h1>";
        document.getElementById(i).innerHTML = "<h1>X</h1>";
      }
this.removeEventListener("click", handleClick);
xIsNext = !xIsNext; 

    // If calculateWinner returns true
    // highlight the winner and disable all of the squares
    // otherwise update the status in the UI to display the player
    if(calculateWinner()){
        highlightWinner();
        disableAll();
    }
}

function calculateWinner() {
    for (var i = 0; i < lines.length; i++) {
        var a = lines[i][0];//checks indexes
        var b = lines[i][1];
        var c = lines[i][2];       
        if (squares[a] && 
        squares[a] === squares[b] && 
        squares[a] === squares[c]) {
            winner = squares[a];
            winningLine = lines[i];
            return true;
        }
    }
    winner = null;
    winningLine = Array();
    return false;
}

//
function highlightWinner() {

    // Update the status in the UI to display the winner
    // Iterate through the winningLine array.  It contains the indices of the winning squares
    //      get the next square using the current index in the winningLine array as the id
    //      add the class red to the square
    // Disable all of the squares
    document.getElementById("status").innerHTML = "<h1>You win: " + winner + "</h1>";
    document.getElementById("status").className = "alert alert-success";
    for(i=0; i < winningLine.length; i++){
        document.getElementById(winningLine[i]).className += " red";
    }
    disableAll();
}

function disableAll() {

    // Set the onclick handler for all squares to function that does nothing
    // The id of the square is a number 0 - 8
    var playedSquares = document.getElementsByName("square");
    for(i=0; i < playedSquares.length; i++){
    playedSquares[i].removeEventListener("click", handleClick);
    }
}

// When the page has finished loading, call the function init    
window.onload = init;