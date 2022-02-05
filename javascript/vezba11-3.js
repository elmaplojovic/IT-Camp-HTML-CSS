niz = ["b", 6, "a", "q", 7, 2]
niz2 = []
for (i = 0; i < niz.length; i++) {
    if (typeof niz[i] === "number") {
        niz2.unshift(niz[i])
    } else if (typeof niz[i] === "string") {
        niz2.push(niz[i])
    }
}
console.log(niz2)