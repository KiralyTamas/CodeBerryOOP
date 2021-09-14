// A első feladat, hogy egy Gyártó-fügvényt készítsünk

function firstFactory(name, description, price) {
  return {
    neve: name,
    leiras: description,
    osszeg: price,
    currency: "EUR",
    print: function () {
      return this.neve + this.leiras + this.osszeg + this.currency;
    }
  }
}
const startFirst = firstFactory("kutya", " a csajok kedvence ", 35);
startFirst.print();