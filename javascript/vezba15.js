function powersOfTwo(n){
    pomArr=[]
    for (let i = 0; i <=n; i++) {
        pomArr.push(2**i)
        
    }
  
    return pomArr
  }


  rez=powersOfTwo(3)
  console.log(rez);
  rez2=powersOfTwo(10)
  console.log(rez2);