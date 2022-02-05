function capitaliseString(){
    let fox="the quick brown fox"
    var fox2 = fox.split(" ")
    rec=[]
    for(i=0;i<fox2.length;i++){
       rec = fox2[i].split("")
       fox2[i][0].toUpperCase()
       rec=rec.join("")
       console.log(rec);
    
    }
    fox2.join(" ")
    console.log(fox2);


}
capitaliseString()