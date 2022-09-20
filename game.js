// kullanacagim her seyi cagiriyorum.

const tekrar = document.querySelector(".again");
const sayi = document.querySelector (".number");
const girdi = document.querySelector(".guess");
const cek = document.querySelector(".check");
const mesaj = document.querySelector(".msg");
const hak = document.querySelector(".score");
const sonuc = document.querySelector(".top-score");


//bilgisayar bir sayi tahmin edecek

let rastgele = Math.floor(Math.random() * 20 +1);
console.log(rastgele);
let scorPc = 10;
let toplamScorPc = 0;

// her check butonuna tiklandiginda

cek.onclick = function() {
    const tahmin= girdi.value;

    if( tahmin == rastgele){
        document.querySelector("body").style.backgroundColor = "green";
        number = rastgele;
        mesaj.textContent = "Kazandiniz";
     
        if(scorPc>toplamScorPc){
            toplamScorPc = scorPc ;
            sonuc.textContent = scorPc
        }
    } else {
        if(scorPc > 1){
            scorPc--;

            tahmin < rastgele ? (mesaj.textContent= "Artirin") : (mesaj.textContent="Azaltin");
            hak.textContent = scorPc;
        }else {
            mesaj.textContent = "Kaybettiniz";
            document.querySelector("body").style.backgroundColor ="red"
            sonuc.textContent = 0;
            scorPc = 0


        }
    }
}

//again tusu icin

tekrar.onclick = () => {
    rastgele = Math.floor(Math.random() * 20 +1);
    scorPc = 10;
    toplamScorPc = scorPc;
    sayi = "?"
    mesaj = "Starting..."
    girdi.value = "";
    document.querySelector("body").style.backgroundColor = "orange";



}

//enter ekleme

girdi.onkeydown = function (tus){
    tus.keyCode == 13;

    cek.onclick()
    girdi.value = ""
}