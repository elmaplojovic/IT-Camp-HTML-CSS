br = window.prompt("Unesite broj brojeva");
var pb=0;
var nb=0;
for (i=0; i<br; i++){
    var broj = window.prompt("Unesite broj ");

    if(broj % 2==0){
        pb++;

    }else{
        nb++;
    }


}
   
console.log("Broj parnih brojeva je",pb)
console.log("Broj neparnih brojeva je",nb)