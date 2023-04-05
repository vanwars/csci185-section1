const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe",
    "Walter", "Valentin"
];


// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');
/**
 * What do you want to repeat?
 *  insertAdjacentHTML statement
 * How long do you want to repeat it?
 *  13
 *  names.length
 * What do you change each time?
 */
let i = 0;
while (i < names.length) {
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    ++i;
}
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[4]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[5]}!</p>`);
