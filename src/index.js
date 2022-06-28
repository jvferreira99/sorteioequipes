var times = ["São Paulo", "Palmeiras","Santos","Corinthians","Bragantino"]
var jogosfora = [0,0,0,0,0];
var jogoscount = [0,0,0,0,0];
var ordemjogos = [];
var timeleft;
var timeright;
var conditionsleft = new Boolean();
var conditionsright = new Boolean();
var jogos=[];
var resto=[];
var falhaletf;
var falharight;

roda(); 
function sorteioleft(){    
        timeleft = Math.floor(Math.random() * 5);
        if(jogosfora[timeleft]==-1||jogoscount[timeleft]>=4){
            conditionsleft = false
            falhaletf++;
            if(falhaletf>=20){
                roda();
            }else{
            sorteioleft();}
        }else{
            conditionsleft = true
            falhaletf=0;
        }
}
function sorteioright(){    
    timeright = Math.floor(Math.random() * 5);
    if(jogosfora[timeright]==-1||jogoscount[timeright]>=4){
        conditionsright = false
        falharight++;
        if(falharight>=20){

            roda();
        }
        else{
        sorteioright();
        }

    }else{
        conditionsright = true
        falharight=0;
    }
}

function roda(){
    jogos=[];
    ordemjogos=[];
    jogosfora=[0,0,0,0,0];
    jogoscount=[0,0,0,0,0];
    resto=[];
while(ordemjogos.length<9){

    if(conditionsleft==false){
  sorteioleft();
    }
    if(conditionsright==false){
        sorteioright();
    }
    if (timeleft==timeright||jogos.indexOf(times[timeleft]+times[timeright])>-1||jogos.indexOf(times[timeright]+times[timeleft])>-1){
        conditionsleft=false;
        conditionsright=false;
      }
 else  {
    tabela();
}}

if(ordemjogos.length==9){
    for(var i=0;i<times.length;i++){
    if(jogoscount[i]<4&&jogosfora[i]>-1){
    resto.push(times[i]);
    }
    }
    if(resto.length<2){
        roda();
    }else{
    ordemjogos.push(resto[0] + " X " + resto[1]);
    jogos.push(resto[0]+resto[1]);
    console.log(jogosfora);
    console.log(jogoscount);
    console.log(ordemjogos);
    }
}}

function tabela (){

for(var i =0;i<times.length;i++){
    jogosfora[i] += 1;
}
jogosfora[timeleft]=-1;
jogosfora[timeright]=-1;
jogoscount[timeleft]++;
jogoscount[timeright]++;
console.log(jogosfora);
console.log(jogoscount);
ordemjogos.push(times[timeleft] + " X " + times[timeright]);
jogos.push(times[timeleft]+times[timeright])
console.log(ordemjogos)
conditionsleft = false;
conditionsright =false;
}




