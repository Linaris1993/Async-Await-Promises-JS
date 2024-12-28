// created 2 async functions.
function printNumber1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber1 is done');
            resolve(1);
        }, 1000);
    });
}

function printNumber2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber2 is done');
            resolve(2);
        }, 1000);
    });
}

// This function will invoke both printNumber1 and printNumber2
// functions one after another.
async function oneByOne() {
    let number1 = await printNumber1();
    let number2 = await printNumber2();
    console.log(number1, number2);
}
oneByOne();

// This function will invoke both printNumber1 and printNumber2
// functions in parallel.
async function inParallel() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    const [num1, num2] = [await promise1, promise2]
    //or
    console.log(await promise1, await promise2);
    //or use Promise.all();
}
inParallel();