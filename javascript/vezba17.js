function sortiraj (niz){
    
    for(i=0;i<niz.length;i++){
        for (let j=niz.length-1 ;j > 0 ;j--) {
    
            if(niz[j]<niz[j-1]){
                let pomVar=niz[j]
                niz[j]=niz[j-1]
                niz[j-1]=pomVar
        }else{
            break;
        }
        
        }
     console.log(niz)
     console.log(niz[niz.length-1]+niz[niz.length-2])
    }
}

sortiraj([9,3,4,7,6,8,1,2])
