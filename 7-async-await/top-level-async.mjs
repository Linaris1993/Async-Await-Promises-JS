function getSpecificNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 20000)
    });
}
//it will work with sync function cause its mjs file
const specificNumber = await getSpecificNumber();
console.log(specificNumber);

//it will also work with sync function and js file if you add "type": "module" in package.json file