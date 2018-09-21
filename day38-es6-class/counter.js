class Counter {
    constructor() {
        this.value = 0;
    }
    up() {
        this.value++;
        return this.value;
    }
    down() {
        this.value--;
        if(this.value < 0) {
            this.value++;
        }
        return this.value;
    }
    reset() {
        this.value = 0;
        return this.value;
    }
}

module.exports = {
    Counter
}
