//Buatlah fungsi yang menerima 1 parameter angka
//dan mengembalikan string apakah angka yang dimasukan
//adalah bilangan ganjil atau genap

function ganjiilGenap(angka){
    if (angka %2 === 0) {
        return "genap";
    } else {
        return "ganjil"
    }
}
    // panggil fungsi
    var inputAngka = 8;
    var outputcek = ganjiilGenap(inputAngka);
    console.log(`Angka ${inputAngka} adalah bilangan ${outputcek}.`);
