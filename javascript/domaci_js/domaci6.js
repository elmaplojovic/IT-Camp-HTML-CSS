var znak=window.prompt("za sabiranje unesite 1,\n za oduzimanje unesite 2,\n za mnozenje unesite br 3,\n za deljenje unesite br 4,\nza izlazak iz programa unesite 0")
var br1=Number(prompt("Unesite broj"));
var br2=Number(prompt("Unesite broj"));
var rez=0;

    if(znak==1){
       rez=br1+br2;
       alert(`zbir je ${rez}`);
    }else if(znak==2){
       rez=br1-br2 ;
       alert(`razlika je ${rez}`);
    }else if(znak==3){
         rez=br1*br2 ;
         alert(`proizvod je ${rez}`);
    }else if(znak==4){
        rez=br1/br2 ;
        alert(`kolicnik je ${rez}`);
    }else if(znak==0){
        alert("Prekid programa");
    }else{
        alert("Uneli ste pogresan broj")
    }




