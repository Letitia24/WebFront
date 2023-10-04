let fullName = "jhon Deo";

//array
let numbers = [1, 2, 3, 4, 5];

let jhon = {
    fullName:"jhon Deo",
    age:33,
    address:"manado",
};

let hello = () => {
    console.log("hello modul")
};
// default
let hai = () => {
    console.log("hai modul")
};

export {fullName, numbers as numbers, jhon, hello}; 
export default hai;