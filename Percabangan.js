const prompt = require('prompt-sync')({ sigint: true });

const password = prompt('Enter password: ');
const validPassword = 'password'

//perbandingan password (string) vs validPassword (string)
if (password === validPassword) {
    console.log("Selamat datang bos!")
}
else {
    console.log("Password Salah, coba lagi!")
}
console.log("Terimakasih sudah menggunakan aplikasi kami")