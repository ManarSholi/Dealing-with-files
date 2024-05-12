/**
 * Blocking Example (Sync)
 * 
 * The first example shows that the program blocks until it
 * reads the file and then only it proceeds to end the program.
 * 
*/

const fs = require('fs');
let data = fs.readFileSync('./input.txt');

console.log(data.toString());
console.log('Sync Program Ended');

/**
 * Non - Blocking Example (Async)
 * 
 * The second example shows that the program does not wait for
 * file reading and proceeds to print "Program Ended" and at
 * the same time, the program without blocking continues reading
 * the file.
*/
fs.readFile('./input.txt', (error, data) => {
    if (error) {
        return console.error(error);
    }

    console.log(data.toString());
});

console.log('Async Program Ended');

/**
 * How Node Applications Work?
 * 
 * In Node Application, any async function accepts a callback as the
 * last parameter and a callback function accepts an error as the
 * first parameter. Let's revisit the previous example again. Create
 * a text file named input.txt with the following content.
 * 
 * 
 * Here fs.readFile() is a async function whose purpose is to read
 * a file. If an error occurs during the read operation, then the err
 * object will contain the corresponding error, else data will
 * contain the contents of the file. readFile passes err and data
 * to the callback function after the read operation is complete,
 * which finally prints the content.
 * 
 */
fs.readFile('input.txt', (error, data) => {
   if (error) {
      console.log(error.stack);
      return;
   }
   console.log(data.toString());
});

console.log("Program Ended");
