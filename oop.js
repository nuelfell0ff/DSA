class Person {
    constructor(name, age, food) {
        this.name = name;
        this.age = age;
        this.food = food;
    }
    getName() {
        return `My name is ${this.name}`    ;
    }

    getFood () {
        return `My favourite food is ${this.food}`;
    }
}

let Phillip = new Person('Philip', 20, 'Rice');
let Olaoluwa = new Person('Olaoluwa', 21, 'Beans');
// console.log(Phillip);
// console.log(Olaoluwa);
// console.log(Phillip.getName());
console.log(Phillip.getFood());