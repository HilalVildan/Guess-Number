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

    if(tahmin>20 || tahmin<0 ){

        alert("1-20 arasinda bir sayi giriniz")

    }else{

    if( tahmin == rastgele){
        document.querySelector("body").style.backgroundColor = "green";
        mesaj.textContent = "Kazandiniz";
        sayi.textContent = rastgele;
        
    

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
}
//again tusu icin

tekrar.onclick = () => {
    console.log("merhaba");
    rastgele = Math.floor(Math.random() * 20 +1);
    console.log(rastgele);
    scorPc = 10
    hak.textContent = 10;
    toplamScorPc = 0
    sonuc.textContent = 0;
    sayi.textContent = "?"
    mesaj.textContent = "Starting..."
    girdi.value = "";
    document.querySelector("body").style.backgroundColor = "orange";

}

