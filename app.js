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
const gameBoardModule = (function() {
    'use strict';

    let gameBoardXO = [];
    return {gameBoardXO};

})();

//controls the flow of the game
const displayControllerModule = (() => {
    'use strict';
    //ToDo: define winning combinations and game/player state
    const winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    let winner = null;
    let turn = 0;
    let winnerCombo = [];

    //ToDo: starts at player1 and alternates players after placing symbol
    const playerTurn = (function () {
        //
    });

    //ToDo: end game
    let result = () => {
        //check for 3 in a row or else tie if board is full
    }
})();

//player factory function
const Player = (name, symbolXO) => {
    //what can players do
    let placeSymbol = () => {
        field.addEventListener("click", () => {
            //ToDo: places X or O into the field of the grid

            console.log(Player.name + " made a move.")
        });        
    };

    //return to access local scopes from global
    return {placeSymbol};
};

/*
//ToDo: click on gameboard and add in the correct array index (not sure if required)
const dataIndex = document.querySelectorAll(".data-index");
dataIndex[i] = gameBoardXO[i];
*/

//create player objects
const player1 = Player('Player1', 'X');
const player2 = Player('Player 2', 'O');

////DOM SELECTORS////
var field = document.getElementById("field");
