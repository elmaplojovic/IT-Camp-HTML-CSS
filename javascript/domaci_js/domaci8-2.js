niz=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
duzNiza=niz.length;

for( i=0;i<duzNiza;i++){
    duzEl=niz[i].length;
    var el=""
    for( j=0;j<duzEl;j++){
        if(j == duzEl - i - 1){
            niz[i][j]=0
        }
        
        el+=`${niz[i][j]}\t`
    } 
    console.log(el)
}
