var a = window.prompt("Unesite broj")
var sum = 0
for (let i = a; i > 0; i--) {
    var f = 1;
    for (let j = i; j > 0; j--) {
        f = f * j;
    }
    sum += f
}
console.log("faktorijel od", a, "je", sum)