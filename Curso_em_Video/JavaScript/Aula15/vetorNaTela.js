let valores = [8,4,5,3,2]

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
valores.sort()
for(let pos=0;pos<valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

valores.sort()  
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}