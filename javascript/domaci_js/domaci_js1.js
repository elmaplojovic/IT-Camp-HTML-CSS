a = window.prompt("Unesite dan")
b = window.prompt("Unesite mesec")
c = window.prompt("Unesite godinu")

var danasnji_datum =new Date( );

var g = danasnji_datum.getFullYear () ;

var m = danasnji_datum.getMonth () + 1 ;

var d = danasnji_datum.getDate () ;

c = g-c
if (a>d){
    a=30-(a-d)
    b= b-1
} else {
    a=d-a
}
if (b>m){
    b=12-b-m
    c= c-1
} else {
    b=m-b
}

console.log("Imas",c,"godina")
console.log("Imas",b,"meseci")
console.log("Imas",a,"dana")




