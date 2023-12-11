import { createStacks } from '';
createStacks({
    stacks: [],
    queues: [
        `() =>{
            console.log(1);
        }`,
    ],
});

setTimeout(() => {
    console.log(1);
}, 0);

console.log(2);
