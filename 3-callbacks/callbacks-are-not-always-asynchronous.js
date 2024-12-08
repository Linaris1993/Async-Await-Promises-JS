// Example of an asynchronous function
// if setTimeout function is removed, then its sync function
function f(callback) {
    setTimeout(() => callback(), 0);
}

f(() => console.log('This is a callback'));

console.log('Hello world!');