var degerler = ["TAŞ", "KAĞIT", "MAKAS"];
function games(oyuncu_deger) {
    var pc_degeri=Math.floor(Math.random() * 3);
    document.getElementById("pc_oyun").innerHTML=degerler[pc_degeri];
    document.getElementById("oyuncu_oyun").innerHTML=oyuncu_deger;
    if((oyuncu_deger=="TAŞ" && degerler[pc_degeri]=="MAKAS")||(oyuncu_deger=="KAĞIT" && degerler[pc_degeri]=="TAŞ")||(oyuncu_deger=="MAKAS" && degerler[pc_degeri]=="KAĞIT")){
        artir("oyuncu");
        yazdir("OYUNCU KAZANDI");
    }else if(oyuncu_deger==degerler[pc_degeri]){
        artir("beraber");
        yazdir("BERABERE KALDINIZ");
    }else{
        artir("pc");
        yazdir("BİLGİSAYAR KAZANDI");
    }
    control();
}

function artir(params) {
    if(params=="oyuncu"){
        var oyunuc=document.getElementById("oyuncu");
        oyuncu.value=Number(oyuncu.value)+1;
    }else if(params=="pc"){
        var pc=document.getElementById("pc");
        pc.value=Number(pc.value)+1;
    }
    
}

function yazdir(params) {
    document.getElementById("sonuc").innerHTML=params;
}

function control() {
    var pc=document.getElementById("pc");
    var oyuncu=document.getElementById("oyuncu");
    if(Number(pc.value)==5){
        addDiv("Oyun bitti ve kazanan Bilgisayar");
    }else if(Number(oyuncu.value)==5){
        addDiv("Oyun bitti ve kazanan Oyuncu");
    }
}


function addDiv(params) {
    var btn = document.createElement("DIV"); 
    btn.innerHTML =params;   
    var typ = document.createAttribute("class");
    typ.value = "d-flex bg-info justify-content-center align-items-center text-center rounded-pill text-white mt-3 p-3";
    btn.attributes.setNamedItem(typ);  
    
    var btn1 = document.createElement("BUTTON");
    btn1.innerHTML ="RESET";
    var typ1 = document.createAttribute("class");
    typ1.value = "d-flex bg-info justify-content-center align-items-center text-center rounded-pill text-white mt-3 p-3";

    document.getElementById("a").appendChild(btn);
    document.getElementById("a").appendChild(btn);
}


