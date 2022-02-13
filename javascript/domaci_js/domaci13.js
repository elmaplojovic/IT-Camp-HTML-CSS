var library=[ {author:'Bil G',title:'The road ahead',readingStatus:true},
    {author:'Stiv J',title:'Walter',readingStatus:true}
   {author:'Suzane C',title:'The final book',readingStatus:false}]
function books(){
    for(i=0;i<library.length;i++){
        console.log(library[i].readingStatus)
    }

}
books()