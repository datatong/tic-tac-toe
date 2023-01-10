////STORE THE GAMEBOARD AS AN ARRAY INSIDE OF A GAMEBOARD OBJECT

//module (one of each) for gameboard & displaycontroller
//factory functions (multiples of) for players

//function that will render the contents of the gameboard array to the webpage

//functions that allow players to add marks to a spot on the board
//then tie it to DOM, letting players click on gameboard to place marker

//build logic to check when game is over

//allow player to put in their names, include start/restart button
//add display element that congratulates the winner

//////---- START BELOW ----//////
//gameboard module
const gameBoard = (function() {
    'use strict';

    let gameBoardXO = {};

    //not sure where this function goes yet
    let result = () => {
        //check for 3 in a row or else tie if board is full
    }

})();

//display controller module
//controls the flow of the game
const displayController = (() => {
    'use strict';
    //starts at player1 and alternates players after placing symbol
})

//player factory function
const Player = (name, symbolXO) => {
    //what can players do
    let placeSymbol = () => {
        field.addEventListener("click", () => {
            //places X or O into the field of the grid
            gameBoardXO.push(Player.symbolXO);

            console.log(Player.name + " made a move.")
        });        
    };

    //return to access local scopes from global
    return {placeSymbol};
};

//create player objects
const player1 = Player('Player1', 'X');
const player2 = Player('Player 2', 'O');

////DOM SELECTORS////
var field = document.getElementById("field");
