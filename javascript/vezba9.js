niz = [1, 2, 3, 4, 5]
niz2 = [];

console.log(niz)
console.log(niz2)
nizl=niz.length

for (let i = 0; i < nizl; i++) {
    console.log(i)
    let el = niz.shift();


    niz2.push(el);
}
console.log(niz)
console.log(niz2)