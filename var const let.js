//var const let

var name = 'pritam';
console.log(name)

const ownersName = 'hari Singh';
console.log(ownersName);

{
    let city = 'Delhi';
    console.log(city);
}
const arr1 = [12,25,65,4];
console.log(arr1)


// Primitive data type 

// string
var name = "hary";
console.log("my name is " + name);

//Numbers
let marks = 32;
 console.log("data type is " + (typeof marks));

//Booleons
let isDriver = true;
console.log("data type is " + (typeof isDriver));

//Null
let nullVar = null;
console.log("data type is " +(typeof nullVar));

//Undefined 
let undef = undefined;
console.log("data type is " +(typeof undef));

// Reference data type

//Arrays 
myarr = [2,3,4,5,6, false, "string"];
console.log("data type is " + (typeof myarr));

// Object litrals
let stMarks = {
    pritam:50,
    shubham:53,
    rohit:45
}
console.log(typeof stMarks)

//Function
function findName() {

}
console.log(typeof findName)

/*let date = new date;
console.log(new date);*/
// TYPE OF CONVERSION AND TYPE COERCION

//integer

/*let myVar;
myVar = 34;
console.log(myVar);*/

// conversion in string
let myVar;
myVar = String(34);
console.log(myVar,(typeof myVar));

//booleons
let booleonsVar = String(true);
console.log(booleonsVar, (typeof booleonsVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr = [1,2,3,4,5];
console.log(arr.length, (typeof arr));

let i = 67;
console.log(i.toString())

//Number Function
let stri = Number("3434");
stri = Number("3434");
console.log(stri, (typeof stri));

//Numeric value

/*let number = Number('32.456');
console.log(number, (typeof number));*/

//ParseInt
/*let number = parseInt('32');
console.log(number, (typeof number));*/

//parseflot
/*let number = parseFloat('32.433');
console.log(number, (typeof number));*/

//tofixed
let number = parseFloat('32.433');
console.log(number.toFixed(2), (typeof number));


//type of Coercion

let mystr ="678"
let mynum =34;
console.log(mystr + mynum)




