//import fungsi
const { namaFungsi, sayHello, kali } = require("./fungsi");
const { car } = require("./properti");

//memanggil fungsi dari tempat lain
namaFungsi()
sayHello("Elsa")
sayHello("lalak")
sayHello("julia")
kali(1,2)
kali(4,6)

console.log(car.type)
console.log("veloz")
car.stop(car.type)
car.stop("veloz")
car.start()