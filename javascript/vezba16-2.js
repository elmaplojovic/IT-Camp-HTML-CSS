const removeConsecutiveDuplicates = s => {
  
    pomArr=s.split(" ");
    let rez=[];
    
    for(let i=0; i<s.length;i++){
      if( pomArr[i]!== pomArr[i+1]){
        rez.push(pomArr[i]);
      }
    }
    
    
   return rez.join(" ");
    }
  