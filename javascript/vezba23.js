function a (arg){
    console.log("neki code");
    console.log("nestoo")
    arg()
}

function hello(){
    console.log("hello")
}

a(hello);


//metode niza

const numbers=[1,2,3,4,5]

const mojaF = ()=>{
    console.log("hello")
};
numbers.forEach(mojaF);



const numbers=[37,28,14,6,19,55,11]

const kvadrat = () =>{
    console.log(a*a)
}
numbers.forEach(kvadrat)



const numbers=[37,28,14,6,19,55,11]

const ispis = (a,b) =>{
    console.log(a,"je na poziciji",b)
}
numbers.forEach(ispis)