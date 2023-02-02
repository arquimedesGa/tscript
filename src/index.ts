import { AsyncLocalStorage } from "async_hooks";

let name: string = 'Arquimedes';

let age: number = 32;

let working: boolean = false;

let skill: string[] = ['proactive', 'dadicate', 'apassionate'];

let listOFnummber: number[] = [1, 2, 3, 4, 5, 6, 7];

const variableArrayType:(string | number | boolean)[] = ['Arquimedes', 32, false];

//type of enum

enum monthOfYear  {
    january = 1,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    novemeber,
    december
};

enum daysOfWeek {
    monday = 1,
    tuesday,
    wendnesday,
    thursday,
    friday, 
    saturday,
    sunday
};

//obligatory parameteres

function saludar(name: string) {
    console.log(`Hi my name is ${name}`);
};



function despedida(name?: string){
    if(name) {
        console.log(`bye ${name}`);
    } else {
        console.log(`bye`);
    };
};

function funcionTipada(name: string, lastname: string): string{
    return 'hola';
};

function exampleMultipleParams(...name: string[]) {
    name.forEach((element) => {
        console.log(element);
    });
};

exampleMultipleParams('gabriel', 'jose', 'maria');

type persona = {
    name: string
    lastname: string
    age: number
};

const personaClient: persona = {
    name: 'arquimedes',
    lastname: 'rodriguez',
    age: 32
}

const testandoPersona = (persona: persona): void => console.log(`hola me llamo ${persona.name} y mi edad es ${persona.age}`);


function* testyield(valor: number) {
    yield valor +1;
    yield valor +2;
};

// console.log(testyield(1).next().value);
// console.log(testyield(1).next().value);

class startEngine {
    public finish?: () => void;

    public start(): void {
        setTimeout(() => {
            if(!this.finish) return;

            this.finish();
        }, 1000);
    };
};

const startingTest: startEngine = new startEngine();

startingTest.start()

