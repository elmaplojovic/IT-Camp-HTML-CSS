function nbYear(p0, percent, aug, p) {

    let n=0;
      while(p0<=p){
        
        p2=p0+p0*(percent/100)+aug;
        p0=p2
        n++
      }
    return n
  }
  nbYear(1500, 5, 100, 5000)
  