// console.log("Hello World")
// // contoh comment
// /* contoh
// dua baris comment*/
// console.log("Hello World");

// //let message;
// //message = "Hello";
// //console.log(message)

// var globalVariable = "Hello World";

// let replaceable = "This value will be replaced"
// replaceable = "I love JavaScript";

// const constant = "Hello Purwadhika";

// console.log(globalVariable);
// console.log(replaceable);
// console.log(constant);

// // type data
// //const message = "Javascript";         //string
// const count = 1;                      //number
// const bigNumber = 9007199254740991n;  //bigint
// const isTrue = true;                  //boolean
// const noData = null;                  //object
// let noAssigned;                       //undefined
// const person = {                      //object
//     name: "indriyanus",
//     age: 30
// }

// //console.log(typeof message);     
// console.log(typeof count);       
// console.log(typeof bigNumber);   
// console.log(typeof isTrue);      
// console.log(typeof noData);      
// console.log(typeof person);     

// //let name = "indriyanusmanalor"
// //let newName = name
// //console.log(name);

// //let Person = {
//     //name : 'indriyan',
//     //age : 29
// //};

// //let newPerson = Person;
// //console.log(newPerson);

// //String interpolation
// const name = "indri";
// const message = 'Welcome, ${name}';
// console.log(message);

// //String (123)
// console.log(String(123));

// //Boolean(1)
// //Boolean(0)
// console.log(Boolean(1));


// //latihan modul 1 seasson 1
// //tulis kode untuk mencari luas persegi panjang.
// //contoh: panjang = 5, lebar = 3 -> 15

// let panjang = 5
// let lebar = 3
// console.log(panjang * lebar);

// =========================================================================================

let name = "Indriyanus"
let age = 30

if (name == "Indriyanus"){
    console.log(name, age, "pemegang saham")
}
    else {
        console.log(name, age, "bukan pemegang saham")
    }

let lampulalulintas = "merah"

if (lampulalulintas == "merah"){
    console.log("harus berhenti")
}   else if(lampulalulintas == "kuning"){
    console.log("harus jalan pelan-pelan")
}   else if(lampulalulintas == "hijau"){
    console.log("harus jalan")
}

let buah = "jeruk"

switch (buah) {
    case "jeruk" :
        console.log("harga jeruk 30 ribu rupiah")
        break;
    case "mangga" :
    case "pepaya" :
        console.log("mangga dan pepaya harga nya 40 ribu")
        break;
    default :
        console.log("maaf, kami tidak ada stok buah tersebut")
}
let nilai = 78
// 85-100 A
// 75-84 B
// 0-74 C
if (nilai >= 85 && nilai <= 100){
    console.log("A")
} else if (nilai >= 75  && nilai <= 84){
    console.log("B")
} else if (nilai >= 0 && nilai <= 74){
    console.log("C")
} 