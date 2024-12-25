function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Not suitable car'));
    });
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => console.log(prices))
    .catch(error => console.log(error))

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices)
    })
    .catch(error => {
        console.log(error)
    })

// Promise allSettled returns a fulfill Promise
//returns an object with status:"fulfilled" and value or "rejected" with reason
Promise.allSettled([
    askFirstDealer(),
    askSecondDealer(),
    askThirdDealer()
]);

//Promise.allSettled - use when you don't care whether one of your promises 'fails'
//Promise.all - use when 'failure' of one promises means 'failure' of all the promises