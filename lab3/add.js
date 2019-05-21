const add = (
    () => {
    let sum = 0;
    const proxy = new Proxy(function() {}, {
        apply(receiver, ...args) {
            // console.log(args[1][0])

            sum += args[1][0];
            return proxy;
        },

        get() {
            return () => sum
        }
    });
    return proxy;

})()


const a = add(12)(42)
console.log(a);