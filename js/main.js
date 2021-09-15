// A első feladat, hogy egy Gyártó-fügvényt készítsünk

let firstButton = document.getElementById("firstButton");
let animalName = document.getElementById("animal").value;
let description = document.getElementById("description").value;
let price = document.getElementById("price").value;
let startFirst = firstFactory(animalName, description, price); //Valahol itt lesz a probléma
let array=[animalName, description, price]
function firstFactory(animalName, description, price) {
  return {
    neve: animalName,
    leiras: description,
    osszeg: price,
    content: document.getElementById("content"),
    currency: "EUR",
    print: function () {
      content.innerHTML = this.neve + this.leiras + this.osszeg + this.currency;
    }
  }
}
function start(){
firstButton.addEventListener("click", startFirst.print(array));}
start();