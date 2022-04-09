let initialNumber = Number(prompt('Enter any number:'));

if (isNaN(initialNumber)) {
    alert('Please enter a valid number!');
}
else {
    for (;;) {

        const request = prompt('Enter "continue" if you do NOT want to display the increased number. Enter "break" if you want to break.');

        if (request === 'break') break;

        initialNumber++;

        if (request === 'continue') continue;

        alert(initialNumber);
    }
}
