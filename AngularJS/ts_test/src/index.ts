// https://site212248.tw.cs.unibo.it/exercises/ex20

console.log("Ciao Mondo!");

async function hello() {
	return "Ciao Mondo!";
}

const url = new URL();

let lucky = 23;
lucky = "ciao";

type Style = 'bold' | 'italic';
let font: Style = 'Helvetica';

interface Person {
	first: string;
	last: string;
	age: number;
	[key: string] : any
}

const person: Person = {
	first: 'Todd',
	last: 'Smith',
	age: 27,
	ciao: "ciao" //viene considerata come any
}

const person2: Person = {
	first: 'John',
	last: 'Doe',
	age: 30
}
