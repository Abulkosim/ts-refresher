interface CreditCardPayment {
    type: 'credit_card',
    cardNumber: string,
    amount: number,
}

interface PayPalPayment {
    type: 'paypal',
    paypalEmail: string,
    amount: number,
}

type Payment = CreditCardPayment | PayPalPayment;

function processPayment(payment: Payment): void {
    if (payment.type === 'credit_card') {
        console.log('You are using credit_card');
    } else {
        console.log('You are using paypal');
    }
}

processPayment({
    type: 'paypal', 
    paypalEmail: 'abulkosim@gmail.com', 
    amount: 200, 
});