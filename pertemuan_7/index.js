// //string literal
// //----------------

// let fullName = "Jhon Doe";
// let age = 33;
// let address = "Manado";

// // hallo naa saya jhon document, umur saya 33 tahun
// // dan saya tinggal di manado

// // //cara lama
// // let kalimat5 = "hallo nama saya" + fullName +",umur saya"+ age "tahun dan saya tinggal di" +address;
// // console.log(kalimat5)

// //menggunakan backtik
// let kalimat6 = `Hallo name saya ${fullName}, umur saya ${age}, saya tinggal di ${address}`;
// console.log(kalimat6);


// //arrow fungtion
// //---------------
// //cara sebelumnya
// function sayGreetings(nama){
//     return `hello ${nama}`;
// }
// console.log(sayGreetings{"Jhon"});


// //cara baru
// const sayGreetings6 = (nama) => {
//     return `hello ${nama}`;
// };
// console.log(sayGreetings6{});

// //implicit return value
// const sayGreetings6 = (nama) => `hello${nama}`;
// console.log(sayGreetings6{});

// //IIFE
// //fungsi yang langsung dijalankan
// ( {} => {
//     console.log{"Hello"}
// })();

// //atau
// let output1 = ({}=> `Hello`)();
// console.log(output1);

// //pada callback
// let numbers = [1, 2, 3, 4, 5];
// let output2 =numbers.map({item} => item);
// console.log(output2)

// //default parameter
// const sayGreetings = (fullName) => {
//     console.log(`hello ${fullName}`);
// };

// sayGreetings("peter");

//menggunakan kondisi
const sayGreetings = (fullName, age) => {
    if (fullName === undefined){
        fullName = "Jhon Doe";
    }
    if (age === undefined){
        age = 33;
    }
    console.log(`hello ${fullName}`);
};

sayGreetings();

const sayGreetings6 =(fullName = "John Doe", age = 30) => {
    console.log(`Hello ${fullName}`);
};

sayGreetings6("peter");

