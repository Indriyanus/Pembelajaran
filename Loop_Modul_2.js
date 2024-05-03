// let val = 10
/*
- di tingkatkan / ditambahkan 5
- sebanyak 3 kali
*/

//  val += 5
// console.log(val)
//  val += 5
// console.log(val)
//  val += 5
// console.log(val)

// for(let i = 1;i <= 3; i++) {
//     let += 5
//     console.log(val)
//}

//console.log(i)

let val = 2
/*
- di tingkatkan / ditambahkan 5
- sebanyak 3 kali
*/

//  val += 2
// console.log(val)
//  val += 2
// console.log(val)
//  val += 2
// console.log(val)
for(let i = 2 ; i <= 10 ; i += 2) {
    console.log(i)
}

for(let k = 1 ; k <= 10 ; k++ ) {
    if(k % 2 == 0) {
        console.log(k)
    }
}

let start = 1
while(start <= 3) {
    console.log("trial")
    start++
}

console.log(start)

console.log("==================")
start2 = 1
do {
    console.log("do while", start2)
    start2 *= 2
} while ( start2 < 20)
console.log(start2)

for(let y=0 ; y <= 10; y++) {
    console.log("hello")
    if(y == 3){
        break
    }
}

for (let b = 0; b < 5; b++) {
    console.log(" hai semua : ")
    if( b === 2) continue
    console.log(" selamat pagi ", b)
}

let name = "indriyanus manalor"
let count = 0

for (let i = 0; i < name.length; i++) {
    if(name[i] == "i"){
        count = count + 1
    }
}
console.log(count)