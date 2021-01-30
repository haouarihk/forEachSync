let array = [
    "first", "second", "third"
];

// await for a specific time then resolves
const uwait = (e) => {
    return new Promise((s) => setTimeout(() => s(), e));
}

// simulate random write speeds
const srw = async (data) => {
    await uwait(Math.random() * 100)
    console.log(data)
}

// the function
Array.prototype.forEach = async function (cb) {
    if (cb.constructor.name === "AsyncFunction") {
        for (let i = 0; i < this.length; i++) {
            await cb(this[i], i)
        }
    } else {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i)
        }
    }
};

// async arrow function being called
(async () => {
    // this is the awaited function(lol)
    await array.forEach(async (e, index) => {
        await srw(`${index}->${e}`)
    })
})()


