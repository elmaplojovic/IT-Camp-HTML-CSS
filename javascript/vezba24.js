function findMissing(arr1, arr2) {
  
    arr2.forEach(el =>{
        if (arr1.includes(el)){
            arr1.splice(arr1.indexOf(el),1);
        }
    });

    return arr1[0];
    }

    res = findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]);
    res2= findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]);

    console.log(res);
    console.log(res2);
    


    
    const heros =[
       { name: ' Spidr-man'},
       { name: ' Spidr-man'},
       { name: ' Spidr-man'},
       { name: ' Spidr-man'},

    ]

    const heros2=
  