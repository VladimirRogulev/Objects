const obj = {
    method1() {
        return this;
    },
    method2() {
        return this;
    },
    method3() {
        return 'Метод3';
    }
};

alert(obj.method1().method2().method3());
