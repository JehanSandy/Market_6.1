// object
// syntax objec
let obj = {
    nama: `apel`,
    harga: 1000,
    stok: 9
}

// cara akses value di object
console.log(obj.nama)
// console.log(obj.[`name`])

// 
let obj2 = new Object() // let obj2 = {}
obj2.username = `juan`
console.log(obj2)

// method => sebutan function di dalam object
let obj3 = {
    name: `jehan`,
    greet() {
        console.log(`hello`)
    }
}
// cara mengakses method
obj3.greet()

// this => keyword yg di gunakan untuk memanggil value di dalam object ke dalam function
let obj4 = {
    name: `kuroky`,
    intro: function () {
        console.log(`hello my name is ` + this.name)
    }
}
obj4.intro()
// class => cetakan untuk membuat object dengan properti yg sama persin namun valuenya berbeda
// class di gunakan ketika kita ingin membuat objeck dengan properti yg sama berkali kali
// mempermudah dalam membuat object yg sama, sehingga tidak perlu membuat object dengan properti yg sama berkali kali 
class Artis {
    constructor(nama, lagu, rilis) {
        this.nama = nama,
            this.lagu = lagu,
            this.tahun = rilis
    } //hasilnya Artis {nama: `Isyana`, lagu: `Angan-Anganku`, tahun: 2018}
    intro = () => {
        console.log(`I am a singger`)
    }
}
let art1 = new Artis(`Isyana`, `Angan-Anganku`, 2018)
let art2 = new Artis(`Afgan`, `Sadis`, 2018)
console.log(art1)
console.log(art2)
art1.intro()
//hasilnya Artis {nama: `Isyana`, lagu: `Angan-Anganku`, tahun: 2018}

// inheritance => class untuk membuat class lainnya ( cetakan untuk class)
class LivingThings {
    constructor(name, age) {
        this.nama = name
        this.age = age
        this.alive = true
    }
    eat = () => {
        console.log(`eating`)
    }
    breath = () => {
        console.log(`breathing`)
    }
}
class Human extends LivingThings {
    constructor(name, age, pet) {
        super(name, age) //nama dan age di dapat dari clas LivingThings
        this.pet = pet
    }
    work = () => {
        console.log(`work`)
    }
}
class Animal extends LivingThings {
    constructor(name, age, fly) {
        super(name, age)
        this.fly = fly
    }
    tail = () => {
        console.log(`tail`)
    }
}

// contoh ke dua animal extends ke human
class Animal2 extends Human {
    constructor(name, age, pet, fly) {
        super(name, age, pet)
        this.fly = fly
    }
    tail = () => {
        console.log(`tail`)
    }
}

//  hasilnya 
// Animal2 {
//     eat: [Function: eat], => dari LivingThings
//     breath: [Function: breath], => dari LivingThings
//     nama: 'Gagak',
//     age: 3,
//     alive: true,
//     work: [Function: work], => dari Human
//     pet: false, => dari Human
//     tail: [Function: tail], 
//     fly: true
//   }

let human1 = new Human(`Budi`, 20, `cat`)
let animal1 = new Animal(`mangkey`, 5, false)
let Animala = new Animal2(`Gagak`, 3, false, true)

console.log(human1)
console.log(animal1)
console.log(Animala)

