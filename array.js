var mobil = ["Avanza","Yaris","Alya"];

//mobil[1] = “Yaris”;
console.log (mobil[1]) 
console.log (mobil)

mobil.push("veloz")
//console.log (mobil)

var mobil = ["Avanza","Yaris","Alya","Veloz"];

for(let i=0;i<mobil.length;i++){
   console.log('Cetak mobil ke-' + i + ": " + mobil[i]);
}
