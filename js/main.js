// A első feladat, hogy egy Gyártó-fügvényt készítsünk

firstButton = document.getElementById("firstButton");
class firstFactory {
  constructor(animalName, description, price) {
    animalName = document.getElementById("animal").value;
    description = document.getElementById("description").value;
    price = document.getElementById("price").value;
    this.neve = animalName;
    this.leiras = description;
    this.osszeg = price;
    this.content = document.getElementById("content");
    this.currency = "EUR";
    this.print = function () {
      content.innerHTML = "A kedvenc állatom a " + this.neve + ", " + this.leiras + ". Egy ilyen kutyusnak az összege: " + this.osszeg + " " + this.currency+".";
    };
  }
}
(function () {
  firstButton.addEventListener("click", () => new firstFactory(this.animalName, description, price).print());
})();