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

    //ToDo: game state validation
    let winCheck = () => {
        //ToDo: check for winning combos or determine a tie if board is full
        //ToDo: else continue the game
    }

    return {gameBoardXO, winnerCombo, winner, winCheck};
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
    const placeSymbol = (function () {
        const field = document.querySelectorAll(".field");
        field.forEach(field => {
            field.addEventListener('click', e => {
                if (player1.turn == true && gameBoardModule.winner == null && e.target.textContent == '') {
                    gameBoardXO[e.target.index] = player1.symbolXO;
                    field.textContent = player1.symbolXO;
                    player1.turn = false;
                    player2.turn = true;
                    console.log("Player1 made a move: " + gameBoardXO)
                } else if (player2.turn == true && gameBoardModule.winner == null && e.target.textContent == '') {
                    gameBoardXO[e.target.index] = player2.symbolXO;
                    field.textContent = player2.symbolXO;
                    player1.turn = true;
                    player2.turn = false;
                    console.log("Player2 made a move: " + gameBoardXO) 
                } else {
                    return;
                };

                winCheck();
            });
        });
        return {field};
    });
    return {name, symbolXO, turn, placeSymbol};
};

//create player objects
const player1 = Player('Player 1', 'X', true);
const player2 = Player('Player 2', 'O', false);

////DOM SELECTORS////

