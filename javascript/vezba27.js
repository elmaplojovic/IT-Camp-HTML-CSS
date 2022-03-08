fetch("https://catfact.ninja/facts")
.then((response) => {
    return response.json();
})
.then((response) => {
    console.log(response);
});


async function res(){
    try{
        const res= await fetch("https://catfact.ninja/facts");
        resjson = await res.json();
        console.log(resjson.data);
    }catch(err){
        console.log("problem sa serverom");
    }

}

res();