rec=window.prompt("Unesite rec");
for( let i=0;i< Math.floor(rec.length/2);i++){
    if (rec[i] !== rec[rec.lenght-1-i]){
        console.log("rec nije palindrom");
        break;
    }
    if( i=== Math.floor(rec.length/2)-1){
        console.log("rec je palindrom")
    }
}