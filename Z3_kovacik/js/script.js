function zelenePole(id){
    document.getElementById(id).style.borderColor = "green";
    document.getElementById(id).style.borderWidth = "3px";
}
function cervenePole(id){
    document.getElementById(id).style.borderColor="red";
    document.getElementById(id).style.borderWidth = "3px";
}


function ine(){
    var a = document.getElementById('ine');
    var b = document.getElementById('zaner_iny_text');
    if (a.checked){
       b.style.visibility="visible";
    }else{
        b.style.visibility="hidden";
    }
}

function nehra() {
    var a = document.getElementById('nehram')
    var vyberKonzoly = document.getElementsByClassName('vyber_konzoly');
    var zaner = document.getElementsByClassName('zaner');
    var nieGamer = document.getElementsByClassName('nie_gamer');
    var gamer = document.getElementsByClassName('gamer');
    if (a.checked) {
        vyberKonzoly.item(0).style.display = "none";
        zaner.item(0).style.display = "none";
        gamer.item(0).style.display = "none";
        nieGamer.item(0).style.display = "block"
    } else {
        vyberKonzoly.item(0).style.display = "block";
        zaner.item(0).style.display = "block";
        gamer.item(0).style.display = "block";
        nieGamer.item(0).style.display = "none"
    }
}

function pocitac(){
    var a = document.getElementById('pc');
    var vyberKonzoly = document.getElementsByClassName('vyber_konzoly');
    if (a.checked) {
        vyberKonzoly.item(0).style.display = "none";


    } else {
        vyberKonzoly.item(0).style.display = "block";
    }
}

function napovedaZap(nap){
    var a = document.getElementById(nap);
    a.style.visibility="visible";
}
function napovedaVyp(nap){
    var a = document.getElementById(nap);
    a.style.visibility="hidden";
}

function vyberElement(id, valueNaVyber) {
    let element = document.getElementById(id);
    element.value = valueNaVyber;
}
giveSelection1(document.getElementById('sel1').value);

function giveSelection1(selValue1) {
    var sel2 = document.getElementById('sel2');
    var x=0;
    var temp=0;

    for( var i=0; i<sel2.length; i++){
        if(sel2[i].dataset.option !== selValue1)
            sel2[i].style.display = "none"
        else{
            sel2[i].style.display = "block";
            if(x===0){
                vyberElement('sel2',sel2[i].value);
                temp=i;
                x++;
            }
        }
    }
    giveSelection2(sel2[temp].value);
}

function giveSelection2(selValue2) {
    var x=0;
    var sel3 = document.getElementById('sel3');
    for( var i=0; i<sel3.length; i++){
        if(sel3[i].dataset.option !== selValue2)
            sel3[i].style.display = "none"
        else{
            sel3[i].style.display = "block";
            if(x===0){
                vyberElement('sel3',sel3[i].value);
                x++;
            }
        }
    }


}
function overenieForm(){
    var narodeniny=document.getElementById('narodeniny').value;
    var zadanyVek= parseInt(document.getElementById('vek').value);
    var dnes = new Date();
    var datumNarodenia = new Date(document.getElementById('narodeniny').value);
    var vek = dnes.getFullYear() - datumNarodenia.getFullYear();
    var m = dnes.getMonth() - datumNarodenia.getMonth();
    if (m < 0 || (m === 0 && dnes.getDate() < datumNarodenia.getDate())) {
        vek--;
    }
    if(zadanyVek!==vek || narodeniny==='' || narodeniny===null || zadanyVek===null || zadanyVek===''){
        return false;
    }



    var email=document.getElementById('email').value;
    const  povolenyMail = /^.{3,}@.*\..{2,4}/g;
    if(!povolenyMail.test(email) || email==='' || email===null ){
        return false;
    }


    var telcislo=document.getElementById('telefon').value;
    var  povoleneCislo =  /^([0-9]{10})?$/;
    if(!povoleneCislo.test(telcislo) || telcislo==='' || telcislo===null ){
        return false;
    }

    var meno=document.getElementById('meno').value;
    var prezvisko=document.getElementById('prezvisko').value;
    var povoleneMeno = /^[a-žA-Ž\s]*$/i;
    if(!povoleneMeno.test(meno)|| meno===''|| meno===null){
        return false;
    }
    if(!povoleneMeno.test(prezvisko)|| prezvisko===''|| prezvisko===null){
        return false;
    }

}
function ageValidator(input){
    var zadanyVek= parseInt(document.getElementById('vek').value);
    var dnes = new Date();
    var datumNarodenia = new Date(input);
    var vek = dnes.getFullYear() - datumNarodenia.getFullYear();
    var m = dnes.getMonth() - datumNarodenia.getMonth();
    if (m < 0 || (m === 0 && dnes.getDate() < datumNarodenia.getDate())) {
        vek--;
    }
    if(zadanyVek!==vek || input==='' ){
        cervenePole('vek');
        cervenePole('narodeniny');
        napovedaZap('vek_napoveda');
        napovedaZap('datum_napoveda');
    }else {
        zelenePole('vek');
        zelenePole('narodeniny');
        napovedaVyp('vek_napoveda');
        napovedaVyp('datum_napoveda');
    }
}


function emailValidator(input){
    const  povolenyMail = /^.{3,}@.*\..{2,4}/g;

    if(!povolenyMail.test(input)|| input==='' ){
        cervenePole('email');
        napovedaZap('mail_napoveda');
    }else {
        zelenePole('email');
        napovedaVyp('mail_napoveda');
    }
}

function cisloValidator(input){
    var  povoleneCislo = /^([0-9]{10})?$/;

    if(!povoleneCislo.test(input)|| input==='' ){
        cervenePole('telefon');
        napovedaZap('tel_napoveda');
    }else {
        zelenePole('telefon');
        napovedaVyp('tel_napoveda');
    }
}


function menoValidator(input,string,nap){
    var povoleneMeno = /^[a-žA-Ž\s]*$/i;

    if(!povoleneMeno.test(input)|| input===''){
        cervenePole(string);
        napovedaZap(nap);
    }else {
        zelenePole(string);
        napovedaVyp(nap);
    }
}
