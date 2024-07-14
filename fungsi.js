//define fungsi
function namaFungsi(){
    console.log("Hello World!");
 }
 
 //panggil fungsi
//namaFungsi()

function sayHello(nama){
    console.log("Hello " + nama + " !")
}

function kali(a, b){
    hasilKali = a * b;
    console.log("Hasil kali a*b = " + hasilKali);
 }
 
 //kali(3, 2); // -> Hasil kali a*b = 6

//untuk memanggil fungsi ditempat lain
module.exports = { namaFungsi, sayHello, kali }