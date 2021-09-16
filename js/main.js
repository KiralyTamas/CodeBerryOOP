// A első feladat, hogy egy Gyártó-fügvényt készítsünk

let firstButton = document.getElementById("firstButton");
let animalName = document.getElementById("animal").value;
let description = document.getElementById("description").value;
let price = document.getElementById("price").value;
class firstFactory {
  constructor(animalName, description, price) {
    firstButton = document.getElementById("firstButton");
    animalName = document.getElementById("animal").value;
    description = document.getElementById("description").value;
    price = document.getElementById("price").value;
    this.neve = animalName;
    this.leiras = description;
    this.osszeg = price;
    this.content = document.getElementById("content");
    this.currency = "EUR";
    this.print = function () {
      content.innerHTML = "A kedvenc állatom a " + this.neve + ", mert " + this.leiras + ". Egy ilyen kutyusnak az összege: " + this.osszeg + " " + this.currency+".";
    };
  }
}
function start() {
  firstButton.addEventListener("click", () => new firstFactory(animalName, description, price).print());
}
start();