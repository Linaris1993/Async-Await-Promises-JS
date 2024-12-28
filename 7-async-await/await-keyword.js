function getSpecificNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 2000);
    });
}

// There is a waiting time of 2 seconds
// before this number gets printed to the console.
async function f() {
    const specificNumber = await getSpecificNumber();
    console.log(specificNumber);
}
// This is the same as above
function f2() {
    getSpecificNumber()
        .then(specificNumber =>  console.log(specificNumber));
}