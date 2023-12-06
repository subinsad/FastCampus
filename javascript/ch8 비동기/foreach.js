// 반복문에서 비동기 처리

const getMovies = (movieName) => {
    return new Promise((resolve) => {
        fetch(`https://www.omdbapi.com/?apikey=7035c30c&s=${movieName}`)
            .then((res) => res.json())
            .then((res) => resolve(res));
    });
};

const titles = ['frozen', 'avengers', 'avatar'];

/*
titles.forEach(async (title) => { 
    // foreach로 사용하면 순서대로 출력이 안됨
    const movies = await getMovies(title);
    console.log(title, movies);
});
*/

const wrap = async () => {
    for (const title of titles) {
        const movies = await getMovies(title);
        console.log(title, movies);
    }
};
//for반복문을 사용하면 await를 통해 기다리고 기다림이 완료되면 다음코드 가는방식
wrap();
