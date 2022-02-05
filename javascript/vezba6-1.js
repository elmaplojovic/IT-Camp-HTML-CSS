
var plus=0;
var minus=0;
var pbr=0;
var nbr=0;
for(i=0;i<10;i++){
    var a = window.prompt("Unesite broj")
    console.log(a)
    if(a>=0){
        pbr++;
       plus=plus+a;
    }else{
        nbr++;
        minus=minus+a;
    }
}
console.log(`sr vrednost ispod nule je ${minus/nbr}`)
console.log(`sr vrednost iznad nule je ${plus/pbr}`)

