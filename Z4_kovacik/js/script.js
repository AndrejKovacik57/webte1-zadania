
document.getElementById("btn").addEventListener("click", function (){
    if(overenieForm()){
        //var tabulkaWidth=document.getElementById('idecko').offsetWidth;
        var tabulka=document.getElementById('tabulka');
        var close = document.createElement("div");
        var y=document.getElementById('cislo2').value;
        tabulka.style.width="100%";
        tabulka.style.height="auto";
        tabulka.style.display="flex";
        tabulka.style.flexDirection="column";
        tabulka.style.top="0";
        if(y>4){
            tabulka.style.top="-100%";
        }

        close.style.fontSize="25px";
        close.style.width="1em";
        close.innerHTML="X";
        close.style.border = '1px solid black';
        close.style.display="inline-flex";
        close.style.backgroundColor="red";
        close.style.alignItems="center";
        close.style.justifyContent="center";
        close.style.cursor="pointer";
        close.style.borderRadius="15px 0 0 0";

        close.addEventListener("click", function (){
            tabulka.innerHTML="";
            tabulka.style.display="none";


        })

        tabulka.appendChild(close);
        tableCreate();
    }

})

function tableCreate() {
    var tabulka = document.getElementById('tabulka');
    var tbl = document.createElement('table');
    var x = parseInt(document.getElementById('cislo1').value);
    var y = parseInt(document.getElementById('cislo2').value);
    tbl.style.border = '1px solid black';
    for (let i = 0; i <= y; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j <= x; j++) {
            const td = tr.insertCell();
            if (i === y && j === x) {
                td.appendChild(document.createTextNode(''+(i*j)));
                td.style.border='1px solid black';
            } else {


                if(i===0 && j===0){
                    td.appendChild(document.createTextNode(''));
                }
                else if(i===0 && j>0){
                    td.appendChild(document.createTextNode(`x = ${j}`));
                }
                else if(j===0 && i>0){
                    td.appendChild(document.createTextNode(`y = ${i}`));
                }
                else
                    td.appendChild(document.createTextNode(''+(i*j)));
                td.style.border='1px solid black';
            }
        }
    }
    tabulka.appendChild(tbl);
}


function cervenePole(id){
    document.getElementById(id).style.borderColor="red";
    document.getElementById(id).style.borderColor="red";
}
function zelenePole(id){
    document.getElementById(id).style.borderColor="green";
}

function napovedaZap(id){
    var a = document.getElementById(id);
    a.style.visibility="visible";
}
function napovedaVyp(id){
    var a = document.getElementById(id);
    a.style.visibility="hidden";
}

function cisloValidator(input,id,id2){
    var  povoleneCislo = /^([1-9])?$/;

    if(!povoleneCislo.test(input)|| input === '' || input === null ){
        cervenePole(id);
        napovedaZap(id2);

    }else {
        zelenePole(id);
        napovedaVyp(id2);
    }
}

function overenieForm(){
    var input= document.getElementById('cislo1').value;
    var input2= document.getElementById('cislo2').value;
    var  povoleneCislo = /^([1-9])?$/;

    if((!povoleneCislo.test(input)|| input === '' || input === null) || (!povoleneCislo.test(input2)|| input2 === '' || input2 === null)){
        return false;

    }else {
        return true;
    }
}