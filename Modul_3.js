// const input = 9;
// for (let i= 1; i <= 10; i++) {
//     res = input * i
//     console.log (res )
// } 
let num = 1000000
let format = ""
let result = ''
let counterDigit = 1
let numString = String(num)

for ( let i = numString.length-1; i >= 0; i--) {
    if ( counterDigit === 3) {
        console.log( "counterDigit 3 "," digit -> ", numString [i], ' ke ',i )
        format += numString [i] + '.'
        counterDigit = 1
    } else {
        console.log( " digit -> ", numString [i], ' ke ', i)
        format += numString [i]
        counterDigit += 1
    }
}
console.log(format)

for(let i = format.length-1; i >= 0; i--){
    result += format[i]
}
console.log("RP.", result,",00")

//=======================
word = "hello world"
let result2 = ""
let space = false

for (let w = 0; w < word.length; w++){
    if(w === 0){
        result2 += word[w].toUpperCase()
    }
    else if(word[w] === " "){
        space = true
        result2 += " "
    }
    else {
        if (space){
            result2 += word[w].toUpperCase()
            space = false
        } else {
            result2 += word [w]
        }
    }
}
console.log(result2)

//======================
// let name = "halo"
// if (name == "halo"){
//     console.log("olleh")
// }

let name = "hello"
let result3 = ""
if ( a = word.length , a < word.length, a--){
    result3 
}

// punya kata hello
// buat agar hello punya nilai index
// buat agar nilai index yang awal nya dari kiri ke kanan berubah jadi kanan ke kiri

// const tulisan = 'halo nama saya fariz'
// const hurufPertama = tulisan.charAt(0)
// const hurufDiKapital = hurufPertama.toUpperCase()
// const hasil = hurufDiKapital + tulisan

// console.log(hasil) //

/*
https://rtfm.vercel.app/faq/javascript/membuat-tulisan-kapital/
*/