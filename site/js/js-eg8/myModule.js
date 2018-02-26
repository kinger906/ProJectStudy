export let a = 12;
export default {
    a: 1,
    b: 1
};

setTimeout(() => {
    a = 1111;
}, 1000);