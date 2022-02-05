//parametri su pozicione varijable (a,b) (2,3) a uzima vrednost 2, b vrednost 3

function pillars(num_pill, dist, width){
    if(num_pill<=1){
        return 0
    }
    if(dist<10 || dist>30){
        return
    }
    if(width<10 || width>50){
        return
    }
    

    return (dist*num_pill-1)*100+width*(num_pill-2);
}

console.log(pillars(2,20,25))