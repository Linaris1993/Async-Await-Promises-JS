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
        setTimeout(() => reject('Sorry man, got only one.'), 1000);
    });
}
// Susy answers in 2 seconds, and she also has an extra pen.
let askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sure, I have a pen for you!'), 2000);
    });
}
//Promise.any returns a promise which gets fulfilled first(if first will be rejected, it will ignore that)
    Promise.any([askJohn(), askEugene(), askSusy()]);

//Promise.any will return rejected Promise only if all of them are rejected
    //or when you pass an empty array
    //Promise.any([])
//AggregateError contains multiple errors, can be useful when you need to throw multiple errors at once