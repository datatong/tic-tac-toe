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

    //board array
    let gameBoardXO = [];
    return {gameBoardXO};

    //define winning combinations and starting player & game state
    const winningCombos = [
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

    //ToDo: player functions and flow of the game
    const playerTurn = (function () {
        const field = document.querySelectorAll(".field");
        field.forEach()
        //
    });

    //ToDo: game state validation
    let checkGame = () => {
        //ToDo: check for winning combos or determine a tie if board is full
        //ToDo: else continue the game
    }
})();

//controls the display
const displayControllerModule = (() => {
    'use strict';
    //ToDo: display turn player
    //ToDo: display winner
})();

//player factory function
const Player = (name, symbolXO, turn) => {
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

//create player objects
const player1 = Player('Player 1', 'X', true);
const player2 = Player('Player 2', 'O', false);

////DOM SELECTORS////

