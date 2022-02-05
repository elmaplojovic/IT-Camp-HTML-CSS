

while(true){
    br=Number(prompt("Unesite broj"));

    if(br===0){
        alert("Uneli ste 0,pewkida se program")
        break;
    }
    if(10<=br && br<=20){
        alert("broj je u tacnom rasponu",br)
    }else{
        alert("broj nije u tacnom rasponu");
    }
    
}