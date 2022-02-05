function NIZ(n){
    pomArr=[]
    for (let i = 1; i <=n; i++) {
        pomArr.unshift(i)
        
    }

    return pomArr
  }

  rez=NIZ(10)
  console.log(rez)
  console.log(NIZ(5))