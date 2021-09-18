// A első feladat, hogy egy Gyártó-fügvényt készítsünk

firstButton = document.getElementById("firstButton");
//Itt kezdődik a szülő konstruktor kódja
class FirstFactory {
  constructor(animalClass, description, price) {
    animalClass = document.getElementById("animal").value;
    description = document.getElementById("description").value;
    price = document.getElementById("price").value;
    this.neve = animalClass;
    this.leiras = description;
    this.osszeg = price;
    this.content = document.getElementById("content");
    this.currency = "EUR";
  }
};
//Itt található a FirstFactory prototipus fügvénye
FirstFactory.prototype.print = function () {
  content.innerHTML = "A kedvenc állatom a " + this.neve + ", " + this.leiras + ". Egy ilyen kutyusnak az összege: " + this.osszeg + " " + this.currency + ".";
};
//Itt található az eseményfigyelő, amit a firstButton gombra illesztettem rá.
let actions = function () {
  new FirstFactory(this.animalClass, description, price).print();
  new FirstChild(this.animalClass, age, color).family();

};
(function () {
  firstButton.addEventListener("click", actions);
})();
// Itt kezdődik a gyerek konstruktor kódja

class FirstChild {
  constructor(animalClass, age, color) {
    new FirstFactory.call(this, animalClass)
    age = document.getElementById("age").value;
    color = document.getElementById("color").value;
    this.content2 = document.getElementById("content2");
    this.age = age;
    this.color = color;
  }
}
FirstChild.prototype = Object.create(FirstFactory.prototype);
Object.defineProperty(FirstChild.prototype, 'family', {
  value: FirstChild,
  enumerable: false,
  writable: true
}
);
FirstChild.prototype.family = function () {
  content2.innerHTML = "djfjgndfsgsjdf" + this.animalClass + "dff" + this.age + "dgdf" + this.color;
};