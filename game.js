
//rastgele sayiyi tekrar againe basinca tekrar kullanacagimiz icin let yazmak zorundayiz.
//hangi sayiya kadar istiyorsaniz o sayiyla carpip yuvarlaak en dogru yoldur.
let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;
let enYuksekScor = document.querySelector(".top-score");


//! her check butonuna basildiginda...

document.querySelector(".check").addEventListener("click", ()=>{

   const tahmin =  document.querySelector(".guess").value;
   
        //* tahmin girilmaden check butonuna basilmasin...
    if(!tahmin){
        mesaj.textContent ="Lütfen bir sayi giriniz.";
    
        //* tahmin dogru girildiyse...
    }else if(tahmin==rastgeleSayi) {

        mesaj.textContent = "Tebrikler Bildiniz..🎉";
        document.querySelector ("body").style.backgroundColor = "green";
        document.querySelector (".number").textContent = rastgeleSayi;

        //!skor güncellenecek ekrana bastirilacak

        if(scor>enYuksekScor){
        enYuksekScor = skor;
        document.querySelector(".top-score").textContent =enYuksekScor;
        }

        //*tahmin yanlis girildiyse
    }else{

        if(skor>1){
            skor--;

            document.querySelector(".score").textContent = skor;
            tahmin < rastgeleSayi ? (mesaj.textContent = "Arttirin📈") : (mesaj.textContent = "Azaltin📉");

        }else {
            //oyunu kaybettin
            mesaj.textContent = "Oyunu Kaybettiniz";
            document.querySelector (".score").textContent = 0
            document.querySelector("body").style.backgroundColor = "red";
            document.querySelector(".number").textContent = rastgeleSayi;

        }

    }
})


//!again butonuna basildiginda ayarlar baslangic degerine kurulsun arka ekran gri olsun

document.querySelector(".again").onclick=()=>{

    rastgeleSayi = Math.ceil(Math.random() * 20);
    console.log(rastgeleSayi);
    skor=10;
    document.querySelector(".score").textContent = 10;
    mesaj.textContent = "Oyun yeni oyuncu icin basliyor...";
    document.querySelector("body").style.backgroundColor = "#2d3436";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent ="?"



}