// การประกาศตัวแปรใน TypeScript
// let variable:type = value

//------ Basic Types --------
// String
// Number
// Boolean
// Array
// Tuple
// Enum
// Unknown
// Any
// Void
// Null and Undefined
// Never
// Object
// Type assertions


//---- String
let say:string = 'Hello World'
console.log(say)

let color:string = 'Blue'
color = 'Red'
console.log(color)


let city:string;
city = 'Bangkok'
// city = 100 
console.log(city)



// Number
let age:number = 35
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

console.log({age,decimal,hex,binary})

// computed property name
var fruit_var = 'fruit'
var eatables = {[fruit_var]: 'Apple', vegetable: 'Carrot'}
console.log(eatables)



//---- Boolean
let isDone: boolean = false
console.log(isDone)
isDone = true
console.log(isDone)



//---- Array
let list: number[] = [1, 2, 3];
let mylist: Array<number> = [1, 2, 3]
let fname: string[] = ['John','Joe','Jane']

console.log(list)
console.log(mylist)
console.log(fname)



//---- Tuple
let x: [string, number];
x = ['Hello', 20]

console.log(x)



//---- Enum

enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green

console.log(c)



//---- Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

let maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
 // const aNumber: number = maybe; // Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
    // TypeScript knows that maybe is a boolean now
    const aBoolean: boolean = maybe;
    // So, it cannot be a string
   //  const aString: string = maybe; // Type 'boolean' is not assignable to type 'string'.

}

if (typeof maybe === "string") {
    // TypeScript knows that maybe is a string
    const aString: string = maybe;
    // So, it cannot be a boolean
    // const aBoolean: boolean = maybe; // Type 'string' is not assignable to type 'boolean'.
}



//---- Any

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime

// looselyTyped.ifItExists();

let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed();

const getValue = (key: string): any => {
    return "success";
    // return 0
    // return false
}

// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");
console.log(str)



//---- Void
function warnUser(): void {
    console.log("This is my warning message");
}

warnUser()

// ---- Null and Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

console.log({u,n})

// ---- Never

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}


// ---- Object

declare function create(o: object | null): void;

// OK
// create({ prop: 0 });
// create(null);
// create(undefined); // with `--strictNullChecks` flag enabled, undefined is not a subtype of null

console.log(typeof create)

// ---- Date
const today = new Date()
today.getMonth()

const person = {
    age: 20
}

class Colors {

}

const red = new Colors()
// red.asfasfasfasf 