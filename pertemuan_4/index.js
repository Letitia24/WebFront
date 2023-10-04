//JavaScript Fungsion

//function greetings( ){
//    return "Hello";
//}

//console.log(greetings());


//parameter dan argumen


//const greetings = function (name) {
    //parameter
//    console.log(age);
//    const job = "teacher"; //local
//    if(job === "teacher") {
//        const address ="manado"; //blok
//    }
//    console.log(address);
//    return"Hello";
//};
//console.log(job);
//console.log(greetings "Jhon");//Argument

//IIFE ()
//anonymous Function

//(function() {
//    console.log"Hello IIFE";
//})();



// const output = (function(){
//    return "Hello IIFE";
// })():

// console.log(output);


// callback fungtion

function createGreetings(name, callback){8
    const greetings = "Hello" + name;
    callback(greetings);
}

function logGreetings(greetings){
    console.log(greetings);
}

createGreetings("Jhon", logGreetings);