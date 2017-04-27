"use strict"

var Predator = (function (oldPredator) {
  var carnivores = [];
  var herbavores = [];
    oldPredator.loadCarnivores = function (callbackToInvoke) {
    var predLoader = new XMLHttpRequest();

    predLoader.addEventListener("load", function (event) {
        // Set the value of the private array
    carnivores = JSON.parse(this.responseText).carnivores;

    callbackToInvoke(carnivores)


      });
    predLoader.open("GET", "carnivores.json")
    predLoader.send();
    }

    oldPredator.loadHerbavores = function (callbackToInvoke) {
    var herbLoader = new XMLHttpRequest();

    herbLoader.addEventListener("load", function (event) {
        // Set the value of the private array
    herbavores = JSON.parse(this.responseText);

    callbackToInvoke(herbavores);

      });
    herbLoader.open("GET", "herbavore.json")
    herbLoader.send();
    }
    return oldPredator
})(Predator || {});
