// welcome
alert('Selamat Datang!\nAnda diminta untuk menebak angka 1-10.\nKesempatan anda hanya ada 3x, jangan sia-siakan kesempatan itu!!');

let ulang = true;

while (ulang) {
    let nyawa = 3;

    for (nyawa; nyawa > 0; nyawa--) {
        // player & computer
        let komputer = Math.floor(Math.random() * 10) + 1;
        let player = parseInt(prompt('Tebak angka:'));

        if (player === komputer) {
        alert('TEBAKAN KAMU BENAR');
            break; // Keluar dari loop jika tebakan benar
        }else if (player < komputer) {
            alert('Tebakan kamu kurang tepat, terlalu rendah.\nNyawa kamu tinggal ' + (nyawa - 1));
        }else if (player > komputer) {
            alert('Tebakan kamu kurang tepat, terlalu tinggi.\nNyawa kamu tinggal ' + (nyawa - 1));
        }
        if (isNaN(player)) {
            alert('Mohon masukan angka.');
            continue; // Melanjutkan loop jika input tidak berupa angka
        }

        if (nyawa === 1) {
        alert('Nyawa kamu habis!\nAngka yang benar adalah: ' + komputer);
        }
    }

    ulang = confirm('mau main lg?');
}

alert('Tengs dah main:D');

