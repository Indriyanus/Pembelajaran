//if(7>5){
    //console.log("executed if true")
//}

if(7>5 == false){
    console.log("executed if true")
}

//console.log(true == true);
//console.log(false == false);
//console.log(true == false);
//console.log(true != false); 

let name = "indri"
let age = 29
if (name == "Indri") {
    console.log("hello", name)
} else {
    console.log("please rename")
}

if (age > 17) {
    console.log (name+" had ID ")
} else {
    console.log(name," doesnt had ID")
}

//traffic light
let trafficStatus = "red"

if (trafficStatus = "red") {
    console.log("car should stop")
} else if (trafficStatus == "yellow") {
    console.log("car should drive slow")
} else if (trafficStatus == "green") {
    console.log("car should drive")
} else {
    console.log("traffic status are invalid")
}


let fruit = "Mangoes"
switch(fruit) {
    case "Orange" : // fruit == "Orange"
        console.log ("Orange are $0.59 a pound")
        break
    case "Mangoes":
    case "Papayas":
        console.log ("mangoes and papayas are $2.79 a pound")
        break;
    default :
        console.log("sorry, we are out of fruit")
}

if ("false"){
    console.log("dua")
}

/*  || or
true || true --> true
true || false --> true
false || false --> false
*/

/* &&
true && true --> true
true && false --> false
false && false --> false
false && true --> false
*/

let score2 = 75
if (score2 >=74 && score2 <=100) {
    console.log("LULUS")
}

let score = 78
// 85 - 100 A
// 75 - 84 B
// 0 - 74 C

if(score >=85 && score <=100 ) {
    console.log("A")
} else if (score >=75 && score <=84 ) {
    console.log("B")
} else if (score >=0 && score <=74 ) {
    console.log("C")
}

let val = 1
const res = val == 1 ? true : false
console.log(val)

const res2 = score >=75 && score <=84 ? "LULUS" : "TIDAK LULUS"
console.log(res2)

// ==========================Latihan Soal============================================

/* Tuliskan kode untuk mengonversi celcius ke fahrenheit
contoh : 60 Celcius -> 140 Fahrenheit
*/
let celcius = 60 
console.log (celcius*9/5)+32

/* Tuliskan kode untuk memeriksa apakah angkanya ganjil atau genap
contoh : 25 -> angka ganjil, 2 -> angka genap
*/
let num = 25
if ( num % 2 == 0 ) {
    console.log("angka genap")
} else if ( num % 2 == 1 ) {
    console.log("angka ganjil")
}

/* Tulis kode untuk memeriksa apakah angka tersebut blangan prima atau bukan
contoh : 7 -> 7 adalah bilangan prima
contoh : 6 -> 6 bukan bilangan prima
*/
// let num2 = 7
// if ( num %)
let num2 = 7
let isPrime = true
// 123 / 2 = 61 * 2 * 122 --> 1
// 1543 / 2 = 771 * 2 = 1542 --> 1
for ( let i = 2; i < num2 ; i++) {
    if(num2 % i == 0){
        console.log(num2, " bisa di bagi bilangan = ", i)
        isPrime = false
        break;
    }
}
if(isPrime) {
    console.log(num2, "Bilangan Prima")
} else {
    console.log(num2, "Bukan Bilangan Prima")
}

/* Tulis kode untuk mencari jumlah angka 1 hingga N
contoh : 5 -> 1+2+3+4+5=15
contoh : 3 -> 1+2+3 = 7
*/
let res3 = 0
for ( let g = 1; g <=5 ; g++) {
    res3 = res3 + g
    console.log(res3)
}

/* tulis kode untuk mencari faktorial dari sebuah angka
contoh : 4! -> 4x3x2x1 = 24
contoh : 6! -> 6x4x3x2x1 = 720
*/
let res1 = 1
for ( let e = 1; e <=6 ; e++) {
    res1 = res1 * e
    console.log(res1)
}

/* Tulis kode untuk mencetak N angka fibonacci pertama
contoh : 15 -> 610
*/
first_num = 1 // angka pertama 1
second_num = 1 // angka kedua 1

for (u = 3 ; u <=15 ; u++){
    let temp = first_num
    first_num = second_num
    second_num = temp + second_num
    console.log("fib ke = > ",u," result fib --> ", second_num)
}

