niz1=[["a",1,true],["b",2,false]]
niz2=[[],[],[]]

for(i=0;i<niz1.length;i++){
    for(j=0;j<niz1[i].length;j++){
        if(typeof niz1[i][j]==="number"){
            niz2[0].push(niz1[i][j])
        }else if(typeof niz1[i][j]==="string"){
            niz2[1].push(niz1[i][j])
        }else if(typeof niz1[i][j]==="boolean"){
            niz2[2].push(niz1[i][j])
            niz2()
        }
    }
}
console.log(niz2)
