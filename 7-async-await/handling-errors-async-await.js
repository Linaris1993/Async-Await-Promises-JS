async function f() {
    try {
        const response = await fetch('https://some-host.com/wrong-url');
    }
    //// Execution will go to the catch block
    catch(e) {
        console.log('Some error: ' + e)
    }
}

async function f2() {
    const response = await fetch('https://some-host.com/wrong-url');
}
// You can invoke .catch
f2().catch(e => alert('Custom error: ' + e));