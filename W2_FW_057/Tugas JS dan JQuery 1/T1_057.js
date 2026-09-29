function konversiSuhu() {
    let suhu = parseFloat(document.getElementById("inputSuhu").value);
    let jenis = document.getElementById("jenisKonversi").value;
    let hasil = 0;

    if (isNaN(suhu)) {
        document.getElementById("hasil").innerHTML = "Masukkan suhu yang valid!";
        return;
    }

    switch (jenis) {
        case "1":
            hasil = (suhu * 9/5) + 32;
            document.getElementById("hasil").innerHTML = suhu + "°C = " + hasil + "°F";
            break;

        case "2":
            hasil = suhu * 4/5;
            document.getElementById("hasil").innerHTML = suhu + "°C = " + hasil + "°R";
            break;

        case "3":
            hasil = (suhu - 32) * 5/9;
            document.getElementById("hasil").innerHTML = suhu + "°F = " + hasil + "°C";
            break;

        case "4":
            hasil = (suhu - 32) * 4/9;
            document.getElementById("hasil").innerHTML = suhu + "°F = " + hasil + "°R";
            break;

        case "5":
            hasil = suhu * 5/4;
            document.getElementById("hasil").innerHTML = suhu + "°R = " + hasil + "°C";
            break;

        case "6":
            hasil = (suhu * 9/4) + 32;
            document.getElementById("hasil").innerHTML = suhu + "°R = " + hasil + "°F";
            break;

        default:
            document.getElementById("hasil").innerHTML = "Pilihan tidak valid!";
    }
}