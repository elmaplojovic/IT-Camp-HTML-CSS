function inverseSlice(items, a, b) {
    arr=items.slice(0,a)
   
    arr=arr.concat(items.slice(b))
    return arr;
  }

  console.log([12,14,64,70,89,19,59,09],2,4)
  
