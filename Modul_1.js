console.log("hello world")


let message;

message = "hello"

console.log(message)

var ab = 45
var ab = 12
console.log(ab)

const PI = 3.14

console.log(PI)

let name = "indriyanus manalor"
console.log(name, PI)
console.table([name, PI])

let person = {
    name :"indriyanus manalor",
    age : 30+ " tahun",
    hobby : "game"
}

console.log(person)

// this is comment
/* this is
multi-line comment */

let username;
username = "indriyanus";

console.log(username)

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(123))
console.log(Boolean(23.45))

console.log(new Date())
console.log(new Date(0))

console.log(new Date("2024-05-01"))
console.log(new Date().getFullYear())
console.log(new Date().getMonth())

let x = 10;
x = -x;
console.log(x)

console.log(" postfix --> ", x-- )
console.log(x)
x++
x++
x++
x++


console.log(--x)


console.log(5<7)
console.log(5<=7)
console.log(5<=5)

console.log(5==7)
console.log(5=="5")
console.log(5==="5")
console.log(5===5)

console.log(5!=4)
console.log()


let panjang = 5
let lebar = 3
console.log(panjang * lebar) //mencari luas persegi panjang
console.log(2 *(panjang+lebar)) //mencari keliling persegi panjang

let radius = 5
console.log(radius+radius) //diameter
console.log(2*PI*radius) //keliling
console.log(PI*radius*radius) //luas lingkaran

let segitigaA = 80
let segitigaB = 65
console.log(segitigaA + segitigaB)

//let tanggalA = 2024-04-28
//let tanggalB = 2024-04-30
console.log(tanggalA - tanggalB) //selisih antar tanggal

// dosen
//mencari selisih tanggal dalam hari
let date1 = new Date("2022-01-22")
let date2 = new Date("2022-01-20")

let result = (date1 - date2) / ( 1000 * 60 * 60  *24 )

console.log(result)

//mengkonversi hari ke tahun, bulan dan hari
let days = 366

let year = Math.floor(days / 365)
let yearLeft = days % 365
let month = Math.floor (yearLeft / 30)
let daysLeft = (days % 365) % 30

console.log(year,"years",month,"months",daysLeft,"days")
























