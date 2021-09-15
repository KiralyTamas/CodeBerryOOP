// A első feladat, hogy egy Gyártó-fügvényt készítsünk

let firstButton = document.getElementById("firstButton");
let animalName = document.getElementById("animal").value;
let description = document.getElementById("description").value;
let price = document.getElementById("price").value;
let startFirst = firstFactory(animalName, description, price);
function firstFactory(name, description, price) {
  return {
    neve: name,
    leiras: description,
    osszeg: price,
    content: document.getElementById("content"),
    currency: "EUR",
    print: function () {
      content.innerHTML = this.neve + this.leiras + this.osszeg + this.currency;
    }
  }
}
firstButton.addEventListener("click", startFirst.print());