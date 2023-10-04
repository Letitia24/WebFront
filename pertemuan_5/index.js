// //array
// //variable yang dapat menyimpan banyak data

// //index selalu dimulai dari 0(suatu uruan)

// const students =["Jhon","petter","jack","jane"];
// const numbers =[1, 2, 3, 4, 5];
// const Jhon = ["jhon", "doe" 33, true];

// console.log(students);
// console.log(numbers);
// console.log(Jhon);

// //index
// console.log(students[2]);
// students[2] = "bob";
// console.log(students);

// //length
// console.log(students.length);
// console.log(students[students.length - 1]);

// //mengakses seluruh elemen array
// //cara lama
// for(let 1 = 0;1 <students.length; i++){
//     console.log(students[i]);
// }

// //array method
// //toString()
// console.log(Jhon.toString[]);
// //join()
// console.log(Jhon.join[" "]);
// console.log(Jhon.join["#"]);
// console.log(Jhon.join["..."]);

// //pop
// //menghapus

// Jhon.pop();
// console.log(Jhon);

// //push
// Jhon.push("good Morning");
// console.log(Jhon);

// //shift
// Jhon.shift();
// console.log(Jhon);

// //unshift
// Jhon.unshift("Hello");
// console.log(Jhon);

// //splice
// Jhon.splice(3, 0, true);
// console.log(Jhon);

// //slice
// let jhon2 = jhon.slice(2, 4);
// console.log(jhon2);

// //concat
// let output = jhon.concat(numbers, john2);
// console.log(output);




// //object
// let jhon = {
//     firstName:"Jhon",
//     lastName: "Doe",
//     age: 33,
//     isMarried: true,
//     grade: [80, 90, 100],
//     address: {
//         city: "Manado",
//         province: "Sulawesi Utara",
//         postalCode: "95371",
//     },
//     sayGreetings: function(){
//         console.log("Hello my name is" + this.firstName)
//     },
// };

// //Dot notation
// console,log(jhon,firstName);
// console.log(jhon.grade[2]);
// console.log(jhon.address.city);
// console.log(jhon.sayGreetings[]);


// //bracket notation
// console.log(jhon["firstName"]);
// console.log(jhon["grade"[2]]);
// console.log(jhon["address"]["city"]);
// console.log(jhon["sayGreetings"][]);

//dalam array ada object

let students = [
    {
        id:1,
        name:"jhon",
    },
    {
        id:2,
        name:"jackk",
    },
    {
        id:3,
        name:"peter",
    },
];


//forEach()

students.forEach(function{item}{
    console.log{item.name};
});

//map

let output = students.map(function {item}{
    return item.name;
});
console.log(output);

//filter()
//mencari item yang di perlukan(banyak data)(bisa dimasukan konsisi)
let output = students.filter(function {item}{
    return item.name ==="jhon";
});
console.log(output);

//find()
//hanya menggembalikan satu data
let output = students.find(function {item}{
    return item.name ==="jhon";
});
console.log(output);

