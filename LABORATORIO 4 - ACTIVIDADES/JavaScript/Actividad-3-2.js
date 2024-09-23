function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter();
counter();
counter();