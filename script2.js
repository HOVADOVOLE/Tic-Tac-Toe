let pole = document.querySelector(".pole");
let dopocet = 0;

for(var i = 0; i < 9; i++){
    let policka = document.createElement("div");
    policka.className = "border";
    policka.value = i;
    pole.appendChild(policka);
    policka.addEventListener('click', Hrac);  
}


function Hrac(event){
    if(event.target.innerHTML == ""){
        document.querySelectorAll(".border")[event.target.value].innerHTML = "X";
        document.querySelectorAll(".border")[event.target.value].removeEventListener('click', Hrac);
        dopocet++;
    }
    KontrolaHrac();//Kontrola hráče
    Bot();//Spustí Kolo Bota
    KontrolaBot();//Kontrola bota, jako mohl bych to udělat líp, ale jsem líný kokotko já vím :)
}

function Bot(){
    let cislo = Math.floor(Math.random() * 9);

    if(document.querySelectorAll(".border")[cislo].innerHTML == ""){
        document.querySelectorAll(".border")[cislo].innerHTML = "O";
        document.querySelectorAll(".border")[cislo].removeEventListener('click', Hrac);
        dopocet++;
    }
    else{
        Bot();//Něco jako goto akorát zřetelněji
    }
}

function Restart(){
    location.reload();
}

function KontrolaHrac(){
    if(
        //Sloupce
        document.querySelectorAll(".border")[0].innerHTML == "X" && document.querySelectorAll(".border")[3].innerHTML == "X" && document.querySelectorAll(".border")[6].innerHTML == "X" ||
        document.querySelectorAll(".border")[1].innerHTML == "X" && document.querySelectorAll(".border")[4].innerHTML == "X" && document.querySelectorAll(".border")[7].innerHTML == "X" ||
        document.querySelectorAll(".border")[2].innerHTML == "X" && document.querySelectorAll(".border")[5].innerHTML == "X" && document.querySelectorAll(".border")[8].innerHTML == "X" ||
        //Řady
        document.querySelectorAll(".border")[0].innerHTML == "X" && document.querySelectorAll(".border")[1].innerHTML == "X" && document.querySelectorAll(".border")[2].innerHTML == "X" ||
        document.querySelectorAll(".border")[3].innerHTML == "X" && document.querySelectorAll(".border")[4].innerHTML == "X" && document.querySelectorAll(".border")[5].innerHTML == "X" ||
        document.querySelectorAll(".border")[6].innerHTML == "X" && document.querySelectorAll(".border")[7].innerHTML == "X" && document.querySelectorAll(".border")[8].innerHTML == "X" ||
        //Diagonály
        document.querySelectorAll(".border")[0].innerHTML == "X" && document.querySelectorAll(".border")[4].innerHTML == "X" && document.querySelectorAll(".border")[8].innerHTML == "X" ||
        document.querySelectorAll(".border")[2].innerHTML == "X" && document.querySelectorAll(".border")[4].innerHTML == "X" && document.querySelectorAll(".border")[6].innerHTML == "X"
        ){

        //Výpis Stavu
        let vypis = "Vyhráls!";
        let vytvor = document.createElement("h1");
        vytvor.className = "vypisMe";
        vytvor.innerHTML = vypis;
        document.querySelector(".background").appendChild(vytvor);

        //Vypnutí eventListenerů
        for(let i = 0; i < 9; i++){
            document.querySelectorAll(".border")[i].removeEventListener('click', Hrac);
        }
    }
    else if(dopocet == 9){
        //Výpis Stavu
        let vypis = "Remíza";
        let vytvor = document.createElement("h1");
        vytvor.className = "vypisMe";
        vytvor.innerHTML = vypis;
        document.querySelector(".background").appendChild(vytvor);

        //Vypnutí eventListenerů
        for(let i = 0; i < 9; i++){
            document.querySelectorAll(".border")[i].removeEventListener('click', Hrac);
        }
    }
}

function KontrolaBot(){
    if(
        //Sloupce
        document.querySelectorAll(".border")[0].innerHTML == "O" && document.querySelectorAll(".border")[3].innerHTML == "O" && document.querySelectorAll(".border")[6].innerHTML == "O" ||
        document.querySelectorAll(".border")[1].innerHTML == "O" && document.querySelectorAll(".border")[4].innerHTML == "O" && document.querySelectorAll(".border")[7].innerHTML == "O" ||
        document.querySelectorAll(".border")[2].innerHTML == "O" && document.querySelectorAll(".border")[5].innerHTML == "O" && document.querySelectorAll(".border")[8].innerHTML == "O" ||
        //Řady
        document.querySelectorAll(".border")[0].innerHTML == "O" && document.querySelectorAll(".border")[1].innerHTML == "O" && document.querySelectorAll(".border")[2].innerHTML == "O" ||
        document.querySelectorAll(".border")[3].innerHTML == "O" && document.querySelectorAll(".border")[4].innerHTML == "O" && document.querySelectorAll(".border")[5].innerHTML == "O" ||
        document.querySelectorAll(".border")[6].innerHTML == "O" && document.querySelectorAll(".border")[7].innerHTML == "O" && document.querySelectorAll(".border")[8].innerHTML == "O" ||
        //Diagonály
        document.querySelectorAll(".border")[0].innerHTML == "O" && document.querySelectorAll(".border")[4].innerHTML == "O" && document.querySelectorAll(".border")[8].innerHTML == "O" ||
        document.querySelectorAll(".border")[2].innerHTML == "O" && document.querySelectorAll(".border")[4].innerHTML == "O" && document.querySelectorAll(".border")[6].innerHTML == "O"
        ){
        
        //Výpis stavu
        let vypis = "Prohrál jsi!";
        let vytvor = document.createElement("h1");
        vytvor.className = "vypisMe";
        vytvor.innerHTML = vypis;
        document.querySelector(".background").appendChild(vytvor);
        
        //Vypnutí eventListenerů
        for(let i = 0; i < 9; i++){
            document.querySelectorAll(".border")[i].removeEventListener('click', Hrac);
        }
    }
}