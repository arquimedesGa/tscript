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


console.log(`${name} have a interview at monday ${daysOfWeek.monday} with a big company`);