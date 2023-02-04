// let produk = [
//     {
//         nama: `Apple`,
//         harga: 10000,
//         stok: 5,
//         kadarGula: `medium`,
//         kategori: `buah`
//     },
//     {
//         nama: `French Fries`,
//         harga: 10000,
//         stok: 7,
//         expired: 2022,
//         kategori: `Fast Food`
//     },
//     {
//         nama: `Pants`,
//         harga: 20000,
//         stok: 9,
//         ukuran: `M`,
//         kategori: `Cloth`
//     },
//     {
//         nama: `Iron`,
//         harga: 25000,
//         stok: 11,
//         warranty: true,
//         kategori: `elect`
//     }
// ]
// console.log(produk[0].nama)

let cart = [
    {
        nama: `Apple`,
        harga: 10000,
        qty: 3

    },
    {
        nama: `Celana`,
        harga: 150000,
        qty: 2
    },
    {
        nama: `Magicom`,
        harga: 250000,
        qty: 1
    }
]

const showCart = () => {
    let keranjang = `Daftar barang belanja anda \n`
    cart.forEach((item, indeks) => {
        keranjang += `${indeks+1}. Prdouk ${item.nama}, Harga Rp.${(item.harga).toLocaleString()} x ${item.qty} = Rp.${(item.harga*item.qty).toLocaleString()} \n`
    })
    return keranjang
}
    console.log(showCart())