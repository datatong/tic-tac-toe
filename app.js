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
const displayController = (() => {
    'use strict';
})

//player factory function
const players = (name, symbolXO) => {
    //what can players do
    let placeSymbol = () => {
        field.addEventListener("click", () => {
            //places X or O into the field of the grid
        });
    };
};

//create player objects

////DOM SELECTORS////
var field = document.getElementById("field");
