// Mengambil elemen HTML tempat kita akan menampilkan hasil
const elemenHasil = document.getElementById("hasil");
let arrayHasil = [];

// Melakukan perulangan dari 1 hingga 100
for (let i = 1; i <= 100; i++) {
    
    // Cek kelipatan 3 DAN 5 (sama dengan kelipatan 15)
    // Ingat: Kondisi ini harus ditaruh paling atas!
    if (i % 3 === 0 && i % 5 === 0) {
        arrayHasil.push("MI2A");
    } 
    // Cek kelipatan 3
    else if (i % 3 === 0) {
        arrayHasil.push("MI");
    } 
    // Cek kelipatan 5
    else if (i % 5 === 0) {
        arrayHasil.push("2A");
    } 
    // Jika tidak memenuhi ketiganya, cetak angka aslinya
    else {
        arrayHasil.push(i);
    }
}

// Menggabungkan array menjadi satu string teks yang dipisahkan dengan koma dan spasi
elemenHasil.innerHTML = arrayHasil.join(", ");