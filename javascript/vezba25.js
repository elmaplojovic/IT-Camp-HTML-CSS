function job (){
    return new Promise((resolve, rejecte)=> {
        setTimeout(() => {
           resolve("hello world")
        }, 2000);
    });
}


job().then((res) =>{
    console.log(res);
})
    



