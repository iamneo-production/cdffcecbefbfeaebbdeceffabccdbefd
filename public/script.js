function calculateSum() {
    const num1 = prompt('Enter the first number:');
    const num2 = prompt('Enter the second number:');

    if (num1 !== null && num2 !== null) {
        const parsedNum1 = parseFloat(num1);
        const parsedNum2 = parseFloat(num2);

        if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
            const sum = parsedNum1 + parsedNum2;
            alert('The sum of ' + parsedNum1 + ' and ' + parsedNum2 + ' is ' + sum);
        } else {
            alert('Invalid input. Please enter valid numbers.');
        }
    } else {
        alert('No input provided.');
    }
}
