type FunctionType = (a: number, b: number) => number;

function checkFunction(fn: FunctionType) {
    // pass
}

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + ' returned ' + fn(6))
}

function myFunc(someArg: number) {
    return someArg > 3; 
}

myFunc.description = 'default description'

doSomething(myFunc); 

// generic functions: 
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

function printObjWithNameAndAge<T extends { name: string, age: number}>(obj: T) {
    console.log(obj);
}

printObjWithNameAndAge({name: 'Abulkosim', age: 22})

// function overload
function printInfo(name: string, age: number): string;
function printInfo(param: string | string[], age?: number): string {
    let result = ''
    if (Array.isArray(param)) {
        param.forEach((hobby) => result += hobby)
        return result
    } else {
        return `${name} ${age}`
    }
}