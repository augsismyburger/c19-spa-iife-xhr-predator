"use strict"

let div1 = document.getElementById("one");
let div2 = document.getElementById("two");


function showCarnivores (carnivores) {
    for(var i = 0; i < carnivores.length; i++) {
        div1.innerHTML += carnivores[i].type + ", ";
    }
}

function showHerbavores (herbavores) {
    let herbObject = herbavores.herbavores;
    for(var i = 0; i < herbObject.length; i++) {
        div2.innerHTML += herbObject[i].type + ", ";
    }
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbavores(showHerbavores);
