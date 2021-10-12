



var endDate = new Date().getTime() + 6480000;
var timer = setInterval(function () {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {
    // let gunler = Math.floor(t / (1000 * 60 * 60 * 24));
    let saatler = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let dakikalar = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let saniyeler = Math.floor((t % (1000 * 60)) / 1000);

    // document.getElementById("timer-gunler").innerHTML = gunler +
    // "<span class='label'> gün</span>";

    document.getElementById("timer-saatler").innerHTML =
      ("0" + saatler).slice(-2) + "<span class='label'> sa</span>";

    document.getElementById("timer-dakikalar").innerHTML =
      ("0" + dakikalar).slice(-2) + "<span class='label'> dk</span>";

    document.getElementById("timer-saniyeler").innerHTML =
      ("0" + saniyeler).slice(-2) + "<span class='label'> sn</span>";
  } else {
    document.getElementById("timer").innerHTML = "Zaman bitti!";
  }
const birinci=document.getElementById("b")
const ikinci=document.getElementById("c")
const üçüncü=document.getElementById("d")
const dördüncü=document.getElementById("e")
const beşinci=document.getElementById("f")
const altıncı=document.getElementById("g")


  if(birinci.value == 4 && ikinci.value== 8 && üçüncü.value == 15 
  && dördüncü.value == 16 && beşinci.value==23 && altıncı.value==42){ 
	//   alert("aaaaa")
	var timer = setInterval(function () {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {
    // let gunler = Math.floor(t / (1000 * 60 * 60 * 24));
    let saatler = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let dakikalar = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let saniyeler = Math.floor((t % (1000 * 60)) / 1000);

    // document.getElementById("timer-gunler").innerHTML = gunler +
    // "<span class='label'> gün</span>";

    document.getElementById("timer-saatler").innerHTML =
      ("0" + saatler).slice(-2) + "<span class='label'> sa</span>";

    document.getElementById("timer-dakikalar").innerHTML =
      ("0" + dakikalar).slice(-2) + "<span class='label'> dk</span>";

    document.getElementById("timer-saniyeler").innerHTML =
      ("0" + saniyeler).slice(-2) + "<span class='label'> sn</span>";
  } else {
    document.getElementById("timer").innerHTML = "Zaman bitti!";
  }
const birinci=document.getElementById("b")
const ikinci=document.getElementById("c")
const üçüncü=document.getElementById("d")
const dördüncü=document.getElementById("e")
const beşinci=document.getElementById("f")
const altıncı=document.getElementById("g")


  if(birinci.value == 4 && ikinci.value== 8 && üçüncü.value == 15 
  && dördüncü.value == 16 && beşinci.value==23 && altıncı.value==42){ 
	
	clearInterval(timer); 
	alert("Tebrikler şifreyi doğru bildiniz zamanlayıcı durduruldu")
} 

}, 1000);

} 
}, 1000);





