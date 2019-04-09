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
  init()
{
   
  let boardSquares = document.getElementsByName("square");
   for(i=0;i < this.boardSquares.length; i++){
           this.boardSquares[i].addEventListener("click", this.handleClick.bind(this, i));
       
   }
}
calculateWinner() {
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

// declare a variable ttt
let ttt;

// add an onload handler to the window that assigns ttt to a TTT
window.onload = () => {ttt = new TTT()}