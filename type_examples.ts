// Type Widening Examples

// Example 1: Let declaration
let age = 25; // TypeScript widens this to 'number'
// age = "twenty-five"; // Error: Can't assign string to number

// Example 2: Const declaration (no widening)
const specificAge = 25; // Type is literally '25'

// Example 3: Object literal widening
let point = { x: 0, y: 0 }; // TypeScript widens to { x: number, y: number }
point.x = 100; // OK
// point.x = "100"; // Error: Can't assign string to number

// Type Narrowing Examples

// Example 1: Type Guards with typeof
function processValue(value: string | number) {
    if (typeof value === "string") {
        // In this block, TypeScript knows value is a string
        return value.toLowerCase();
    } else {
        // In this block, TypeScript knows value is a number
        return value.toFixed(2);
    }
}

// Example 2: Type Guards with instanceof
class User {
    constructor(public name: string) {}
    greet() {
        return `Hello, ${this.name}!`;
    }
}

class Admin extends User {
    constructor(name: string, public accessLevel: number) {
        super(name);
    }
}

function handleUser(user: User | Admin) {
    if (user instanceof Admin) {
        // TypeScript knows it's Admin here
        console.log(`Admin access level: ${user.accessLevel}`);
    } else {
        // TypeScript knows it's User here
        console.log(user.greet());
    }
}

// Example 3: Discriminated Unions
type ValidationSuccess = {
    type: 'success';
    data: string;
};

type ValidationError = {
    type: 'error';
    message: string;
};

type ValidationResult = ValidationSuccess | ValidationError;

function handleValidation(result: ValidationResult) {
    if (result.type === 'success') {
        // TypeScript knows it's ValidationSuccess
        console.log(`Success with data: ${result.data}`);
    } else {
        // TypeScript knows it's ValidationError
        console.log(`Error: ${result.message}`);
    }
}

// Real-world example: Form handling with type narrowing
interface FormData {
    username?: string;
    email?: string;
    age?: number;
}

function validateForm(form: FormData): string[] {
    const errors: string[] = [];

    // Type narrowing with truthiness check
    if (!form.username) {
        errors.push('Username is required');
    } else if (form.username.length < 3) {
        errors.push('Username must be at least 3 characters');
    }

    if (!form.email) {
        errors.push('Email is required');
    } else if (!form.email.includes('@')) {
        errors.push('Invalid email format');
    }

    if (form.age !== undefined) {  // Type narrowing to check if age exists
        if (form.age < 18) {
            errors.push('Must be 18 or older');
        }
    }

    return errors;
} 