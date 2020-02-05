const d1 = [45, 78, 10, 3];
const d2 = d1.slice();
const d3 = d1.slice();
const d4 = d1.slice();
const d5 = [];
let sum8 = 0, sum9 = 0;

d1[7] = 100;
d3[7] = 100;

for (let i = 0; i < d2.length; i++) {
    sum8+= d2[i];
}

for (let i in d3) {
    sum9+= d2[i];
}

const my = (a, b) => b - a;

for (let i = 0; i < 3; i++){
    d5[i] = [];
    for (let j = 0; j < 3; j++){
        d5[i][j] = 5;
    }
}

console.log(`Задание 7:`);
console.log(d1);
console.log(d1[6]);
console.log(d1[7]);
console.log(`Задание 8: ${sum8}`);
console.log(`Задание 9: ${sum9}`);
console.log(`Задание 10: ${d4.sort(my)}`);
console.log(`Задание 11: ${d5}`);
