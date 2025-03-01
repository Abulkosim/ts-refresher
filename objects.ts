// extending types 
interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
    unit: string;
}

const address: AddressWithUnit = {
    name: 'Home',
    street: '123',
    city: 'Tashkent',
    country: 'Uzbekistan',
    postalCode: '102030',
    unit: '123'
}

// intersection types
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle; 