var brEl=Number(prompt("unesite br ucenika"));
niz= []
for(i=0; i<brEl; i++){
    el=Number(prompt("unesite visinu ucenika"));
    niz.push(el);
    max=el;
    if(el>max){
        max=el;
    }
}
alert(niz);
alert(`najveci el je ${max}`)
