// Async func always returns Promise
// If you return a non-promise value from an async function,
// JS will automatically wrap it into a resolve promise.
async function f() {
    return 'Hello wold';
}

// If you return a promise from an async function,
// JS will not make any transformations on it.
async function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 5000);
    });
}
const var1 = f();


// you can also return a rejected promise from function.
async function f3() {
    return new Promise.reject(404);
}
