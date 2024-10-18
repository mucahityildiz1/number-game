// Kullanıcıya 1-20 arası bir sayı tahmin etmesini isteyelim.
// Cevap hakkı 5 olacak.
// Her bir yanlış cevapta cevap hakkından -1 azalacak.
// Eğer tahmin ettiği sayı random üretilen sayıdan büyükse 
// "Daha küçük bir sayı deneyin." , tahmin ettiği sayı random üretilen 
// sayıdan küçükse "Daha büyük bir sayı deneyin." diye console'da mesaj çıkartalım.
// Doğru bildiğinde console'da tebrikler yazdıralım.


let randomSayi = Math.floor(Math.random() * 20) + 1;


let cevapHakki = 5;

console.log("1 ile 20 arasinda bir sayi tahmin edin. Cevap hakkiniz: 5 ");

while (cevapHakki > 0) {

  let tahmin = parseInt(prompt("Bir sayı tahmin edin:"));
 
  if (tahmin === randomSayi) {
    console.log("Tebrikler! Doğru tahmin ettiniz.");
    break;
  } 
  
  else {
    cevapHakki--; 

    if (tahmin > randomSayi) {
      console.log("Daha küçük bir sayi deneyiniz. Kalan cevap hakkiniz: " + cevapHakki);
    } else {
      console.log("Daha büyük bir sayi  deneyiniz . Kalan cevap hakkiniz: " + cevapHakki);
    }
    
    if (cevapHakki === 0) {
      console.log("Üzgünüm , cevap hakkiniz bitti. Doğru sayi: " + randomSayi);
    }
  }
}