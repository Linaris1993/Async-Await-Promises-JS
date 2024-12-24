function calculateSquare(number) {
    const promise = new Promise((resolve, reject) => {
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
calculateSquare(1)
    .then(value => {
        console.log(value);
       // return calculateSquare(2); //value which returns here will be an arg in value2 if its fullfill state(not rejected)
        throw new Error('error');
})
    .then(value2 => {
        console.log(value2)
    }, reason => {
    console.log('error happened: ' + reason);
}
);