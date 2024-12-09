//initially Promise is in Pending State (undefined value)
//if resolve -> then its moving to a fulfill state (takes the value as an arg)
//if reject -> then its moving to a rejected state (takes the reason as an arg)
//Promise Properties: PromiseStatus and Promise Value

// This promise will reject with the reason === 'reason'
const myPromise = new Promise(function (resolve, reject) {
    reject('reason');
});
console.log(myPromise);

// This promise will resolve with the value === 'value'
const myPromise2 = new Promise(function (resolve, reject) {
    resolve('value');
});
console.log(myPromise2);

//Then method (take function as an arg: onFulfilled or onRejected)
myPromise.then(function (value) {
    console.log(value);
});//Promise is resolved


const myPromise3 = new Promise(function (resolve, reject) {
    resolve('Hello world');
});
myPromise3.then(value => {
    console.log('This is inside the onFulfilled function'); //will be printed second
});
console.log('This is written after myPromise.then'); //will be printed first
