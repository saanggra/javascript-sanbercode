const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hitungAkarPangkatDua(x) {
    if (x < 0) {
        throw new Error("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        throw new Error("Tidak bisa input bilangan ganjil");
    } else {
        return Math.sqrt(x);
    }
}

function handleInput() {
    rl.question('Masukkan bilangan genap positif: ', (userInput) => {
        try {
            let x = parseInt(userInput);

            if (isNaN(x)) {
                throw new Error("Input bukan bilangan");
            }

            let hasil = hitungAkarPangkatDua(x);
            console.log(`Akar pangkat 2 dari ${x} adalah ${hasil}`);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        } finally {
            rl.close();
        }
    });
}

handleInput();