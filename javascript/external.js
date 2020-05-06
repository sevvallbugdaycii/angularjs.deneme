document.getElementById("hesapla").onclick=function(){
	    var x =document.getElementById("sayi").value;
		var sonuc = Math.sqrt(x);
		document.getElementById("sonucParagrafi").innerHTML=sonuc;
}