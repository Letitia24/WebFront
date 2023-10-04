// menggunakan bentuk IIFE dan callback fungsi
// IIFE
var inputAngka = 8;
var outputCek = (function(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
})(inputAngka);

console.log(`Angka ${inputAngka} adalah bilangan ${outputCek}.`);



//callback
function ganjiilGenap(angka,callback){
    if (angka % 2 === 0) {
        callback("genap");
    } else {
        callback("ganjil");
    }
}

var inputAngka = 8;

ganjiilGenap(inputAngka, function(outputCek) {
    console.log(`Angka ${inputAngka} adalah bilangan ${outputCek}.`);
});

