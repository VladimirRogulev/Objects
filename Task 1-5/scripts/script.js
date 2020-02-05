const getObj = function () {
    return this;
};

const city1 = {
    name: 'ГородN',
    population: 1e7,
    getName() {
        return this.name;
    },
    exportStr() {
        return `name = ${this.name}\npopulation = ${this.population}`;
    },
    getCity: getObj
};

const city2 = {
    name: 'ГородM',
    population: 1e6,
    getName() {
        return this.name;
    },
    exportStr() {
        return `name = ${this.name}\npopulation = ${this.population}`;
    },
    getCity: getObj
};

console.log(city1.getName());
console.log(city2.getName());
console.log(city1.exportStr());
console.log(city2.exportStr());
console.log(city1.getCity());
console.log(city2.getCity());
