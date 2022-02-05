niz1 = [1, 2, 3]
niz2 = [100, 2, 1, 10]
niz3 = []

    for (j = 0; j < niz2.length; j++) {
        if (!niz1.includes(niz2[j])) {
            niz3.push(niz2[j])
        }
    }

    for (i = 0; i < niz1.length; i++) {
        if (!niz2.includes(niz1[i])) {
            niz3.push(niz1[i])
    }
}

console.log(niz3)