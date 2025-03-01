function processPayment(payment) {
    if (payment.type === 'credit_card') {
        console.log('You are using credit_card');
    }
    else {
        console.log('You are using paypal');
    }
}
processPayment({
    type: 'paypal',
    paypalEmail: 'abulkosim@gmail.com',
    amount: 200,
});
