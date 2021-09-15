// A első feladat, hogy egy Gyártó-fügvényt készítsünk

let firstButton = document.getElementById("firstButton");
let animalName = "dfdgf";
let description = "documevalue";
let price = "documenvalue";
let startFirst = firstFactory(animalName, description, price); //Valahol itt lesz a probléma
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
firstButton.addEventListener("click", startFirst.print.bind());