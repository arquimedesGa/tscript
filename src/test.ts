console.log('hola')

class person {
    name: string;
    lastname: string;
    age: number;

    constructor(name:string, lastname: string, age: number){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    result(): string{
        return `hi my name is ${this.name} and my lastname is ${this.lastname} and i ${this.age} years old`
    }
}

const introducing = new person('gabriel', 'Rodriguez', 32);


console.log(introducing.result())