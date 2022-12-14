// hangi sayıya kadar istiyorsanız o sayıyla çarpıp yukarıya yuvarlamak en doğru yoldur
let rastgeleSayı = Math.ceil(Math.random() * 20);
console.log(rastgeleSayı);
let mesaj = document.querySelector(".msg");

let skor = 10;
//?-----------localStorage de topScore adıyla bir degisken olustur

let topScore = localStorage.getItem("topScore") || 0;
//?----browser da DOM da top-score değerini localStoroge den okuyarak güncelle
document.querySelector(".top-score").textContent = topScore;

//!her check butonuna basıldığında olacaklar;

document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;
  console.log(!guess);
  //?tahmin girilmeden check butonuna basılmasın
  if (!guess) {
    mesaj.textContent = "Select a number!";

    //?tahmin doğru ise
  } else if (guess == rastgeleSayı) {
    mesaj.textContent = "Congrats You Win.🎉";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayı;

    if (skor > topScore) {
      //?eğer yeni skor localStoroge den yüksekse, kayıtlı topScore u ben skor umla güncelle
      localStorage.setItem("topScore", skor);
      topScore = skor;
      document.querySelector(".top-score").textContent = topScore;
    }
    //?tahmin yanlış girildiyse
  } else {
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      guess < rastgeleSayı
        ? (mesaj.textContent = "Increase 📈")
        : (mesaj.textContent = "Decrease 📉");
    } else {
      mesaj.textContent = "You lost 😕 ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
//!Again butonuna basıldığında ayarlar başlangıç değerine kurulsun arka ekran #2d3436 olsun
document.querySelector(".again").onclick = () => {
  rastgeleSayı = Math.ceil(Math.random() * 20);
  console.log(rastgeleSayı);
  mesaj.textContent = "game starts for new player";

  skor = 10;
  document.querySelector(".score").textContent = 10;

  document.querySelector("body").style.backgroundColor = "#2d3436";

  document.querySelector(".guess").value = "";

  document.querySelector(".number").textContent = "?";
};
