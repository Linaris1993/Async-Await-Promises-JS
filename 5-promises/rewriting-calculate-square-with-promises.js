function calculateSquares(number) {
    const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (typeof number !== 'number') {
            return reject(new Error('Argument of type number is expected'));
        }
        const result = number * number;
        resolve(result);
    }, 1000);
    });
    return promise;
}
calculateSquares(2)
.then(value => {
    console.log('Success: ' + value);
},reason => {
    console.log('Error: ' + reason);
}
);
