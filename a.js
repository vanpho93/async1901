let a = 1;
// a = 10;
// console.log('a =',a);
setTimeout(() => {
    a = 10;
    console.log('Chay xong, a =', a);
}, 1000);

console.log('a =', a);
// doc file, request, tuong tac database