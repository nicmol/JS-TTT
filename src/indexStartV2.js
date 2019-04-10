// Create a class called TTT
class TTT
{
   
    /*
        Add a constructor that 
        -   defines and initializes all variables
        -   binds the keyword this to the class for each function because
            this will otherwise will refer to the clicked square
            -   this.calculateWinner = this.calculateWinner.bind(this);
            -   DON'T bind this for handleClick at this point
        -   calls the init method
    */
   constructor(){
    this.xIsNext = true;//keeps track of whos turn it is
    this.winner = null;//keeps track of the winner
    this.squares = Array(9).fill(null);//keeps track of the state of the board
    this.winningLine = Array();//keeps track of where the winning line is
    this.lines = [ //all possible ways to win
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];
    
    this.init();
    
   }

    /*
        Convert each function to a method
        -   move it inside the class
        -   remove the keyword function
        -   add this to all of the variables that belong to the class
        -   change var to let or const for local variables
        -   add this to all method calls
     
        Init
        -   bind both this and i to handleClick
            -   this.handleClick.bind(this, i);
            

        CalculateWinner
        -   use destructuring assingment to assign values to
            a b and c in one line
            

        HandleClick
        -   add a parameter i rather than getting i from this
            -   this now refers to the class not the square
        -   remove the local variable i
        -   add a local variable to refer to the clicked square
            -   remember that squares have an integer id 0 - 8
    */
init(){
   
    let boardSquares = document.getElementsByName("square");
    for(let i=0; i < boardSquares.length; i++){
        boardSquares[i].addEventListener("click", this.handleClick.bind(this, i));
   }
}
calculateWinner() {
    for (let i = 0; i < this.lines.length; i++) {
        let[a, b, c] = [this.lines[i][0], this.lines[i][1],this.lines[2]];
        if (this.squares[a] && 
        this.squares[a] === this.squares[b] && 
        this.squares[a] === this.squares[c]) {
            this.winner = this.squares[a];
            this.winningLine = this.lines[i];
            return true;
        }
    }
    this.winner = null;
    this.winningLine = Array();
    return false;
}

 handleClick(i) {
    
    let clickedSquare = this.squares[i];
    
    if(!this.xIsNext){
        this.squares[i] = "O";
        document.getElementById("status").innerHTML = "<h1>Next Player: X</h1>";
        document.getElementById(i).innerHTML = "<h1>O</h1>";
       }
    if(this.xIsNext){
        this.squares[i] = "X";
   
        document.getElementById("status").innerHTML = "<h1>Next Player: O</h1>";
        document.getElementById(i).innerHTML = "<h1>X</h1>";
      }
    removeEventListener("click", this.handleClick);
    this.xIsNext = !this.xIsNext; 
   console.log(this.calculateWinner())
        if(this.calculateWinner()){
            this.highlightWinner();
            this.disableAll();
        }
    }

highlightWinner() {

    
        document.getElementById("status").innerHTML = "<h1>You win: " + this.winner + "</h1>";
        document.getElementById("status").className = "alert alert-success";
        for(let i=0; i < this.winningLine.length; i++){
            document.getElementById(this.winningLine[i]).className += " red";
        }
        this.disableAll();
    }
    
 disableAll() {
    
        // Set the onclick handler for all squares to function that does nothing
        // The id of the square is a number 0 - 8
        let playedSquares = document.getElementsByName("square");
        for(let i=0; i < playedSquares.length; i++){
        playedSquares[i].removeEventListener("click", this.handleClick);
        }
    }
}
// declare a variable ttt
let ttt;

// add an onload handler to the window that assigns ttt to a TTT
window.onload = () => {ttt = new TTT()}
