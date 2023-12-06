const a = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000);
    });
};

const b = () => console.log(2);

// a().then(() => b());

const wrap = async () => {
    await a();
    b();
};

const getMovies = (movieName) => {
    return new Promise((resolve) => {
        fetch(`https://www.omdbapi.com/?apikey=7035c30c&s=${movieName}`)
            .then((res) => {
                res.json();
            })
            .then((res) => {
                console.log(res);
                resolve();
            });
    });
};

const wraps = async () => {
    await getMovies('frozen'); // promise 인스턴스가 반환되는 함수에서만 사용
    console.log('겨울왕국!');
    await getMovies('avengers');
    console.log('어벤져스!');
    await getMovies('avatar');
    console.log('아바타!');
};

wraps();
