var pol=true;
maxrez=0;
for(let i=100; i<1000;i++){
    for(let j=100; j<1000;j++){
        var rez = String(i*j);
        pal=true;

        for(let k=0; k<rez.length;k++){
            if(rez[k] !== rez[rez.length - 1 - k]) {
                pal=false;
                break;
            }        
        }

        if (pal&& maxrez < i*j){
            maxrez=i*j
        }
    }
}
console.log(maxrez);