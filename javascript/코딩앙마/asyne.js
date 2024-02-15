async function getName() {
    return 'mike';
}

getName().then((name) => {
    console.log(name);
});

async function showName() {
    const result = await getName('mike');
    console.log(result);
}

console.log('시작');
