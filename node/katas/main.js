const readline = require('readline');

const MENU_CHOICES = "\nUser Menu:\n" +
    "0 - Exit.\n" +
    "1 - Hello.\n" +
    "2 - Bye.\n" +
    "3 - IDK.\n" +
    "Choose an option:\n";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(MENU_CHOICES)
rl.on('line', (line) => {
    switch (line.trim()) {
        case '':
            console.log(`Try again, please.`);
            break;
        case '0':
            rl.close();
            break;
        default:
            console.log(`You've choose the option ${line.trim()}`);
            break;
    }
    console.log(MENU_CHOICES)
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});
