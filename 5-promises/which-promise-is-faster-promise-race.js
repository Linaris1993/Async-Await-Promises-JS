// Each of these functions returns a promise.
// John answers in 3 seconds, and he has an extra pen.
let askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yep, I got one extra pen.'), 3000);
    });
}

// Eugene answers in 5 seconds, and he doesn't have an extra pen.
let askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Sorry man, got only one.'), 5000);
    });
}

// Susy answers in 2 seconds, and she also has an extra pen.
let askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sure, I have a pen for you!'), 2000);
    });
}

// Promise.race takes an array of values as an argument.
Promise.race([askJohn(), askEugene(), askSusy()])
    .then(value => {
        // Unlike Promise.all, We have only 1 value here,
        // and it is the result of the fastest promise in the array.
        console.log(value)
    })
    .catch(reason => {
        console.log('Rejected ' + reason)
    })

let askAtTheShop = () => {
    return Promise.resolve('We always have pens. You can buy one for $1')
}

Promise.race([askJohn(), askEugene(), askSusy(), askAtTheShop()])
    .then(value => {
        console.log(value);
    })


//If askEugene func will have the fastest answer timeout(e.g 1sec) then Promise will be rejected
// before any other promise gets fulfilled cause Promise.race is taking the fastest promise in array
//* use Promise.any if you want a successful Promise

//If you pass an empty array, it will always be in pending state
Promise.race([])
