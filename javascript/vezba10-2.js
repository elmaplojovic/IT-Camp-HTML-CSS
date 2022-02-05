niz1 = [1, 2, 3]
niz2 = [2, 1, 30]
niz3 = []

for (i = 0; i < niz1.length; i++) {
    if (!niz3.includes(niz1[i])) {
        niz3.push(niz1[i])
    }
}

for (i = 0; i < niz2.length; i++) {
    if (!niz3.includes(niz2[i])) {
        niz3.push(niz2[i])
    }
}

console.log(niz3)