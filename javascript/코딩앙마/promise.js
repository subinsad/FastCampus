const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok');
    }, 3000);
});

pr.then(
    function (result) {
        console.log('실행');
    }, // 이행되었을때 실행
    function (err) {
        console.log('거부');
    } // 거부되었을때 실행
);

pr.then(
    (result) => {
        console.log('실행');
    } // 이행되었을때 실행
)
    .catch(
        (err) => {
            console.log('거부');
        } // 거부되었을때 실행
    )
    .finally(() => {
        console.log('주문끝'); //항상실행
    });

// promise.all
Promise.all([f1(), f2()]).then((res) => {
    console.log(res);
});

//promise.race
Promise.race([f1(), f2()]).then((res) => {
    console.log(res);
});
