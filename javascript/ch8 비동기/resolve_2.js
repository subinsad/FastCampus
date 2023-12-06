/*
const getMovies = (movieName) => {
    return new Promise((resolve, reject) => {
        fetch(`https://www.omdbapi.com/?apikey=7035c30c&s=${movieName}`)
            .then((res) => res.json())
            .then((json) => {
                //받아온 영화를 json으로 받아와서 resolve로 넘김
                if (json.Response === 'False') {
                    reject(json.Error);
                }
                resolve(json); // resolve가 호출되면 then 실행
            })
            .catch((error) => {
                reject(error);
            });
    });
};

let loading = true;

// .then()
getMovies('avengers')
    .then((movies) => console.log('영화목록'.movies)) //then의 콜백부분이 resolve로 들어감
    .catch((error) => console.log('에러발생', error))
    .finally(() => (loading = false));
*/

const getMovies = (movieName) => {
    return new Promise((resolve, reject) => {
        fetch(`https://www.omdbapi.com/?apikey=7035c30c123&s=${movieName}`)
            .then((res) => res.json())
            .then((json) => {
                //받아온 영화를 json으로 받아와서 resolve로 넘김
                if (json.Response === 'False') {
                    reject(json.Error);
                }
                resolve(json); // resolve가 호출되면 then 실행
            })
            .catch((error) => {
                reject(error);
            });
    });
};

let loading = true;

// .then()
getMovies('avengers')
    .then((movies) => console.log('영화목록'.movies)) //then의 콜백부분이 resolve로 들어감
    .catch((error) => console.log('에러발생', error))
    .finally(() => (loading = false));

//async/await
const wrap = async () => {
    try {
        const movies = await getMovies('avengers');

        console.log('영화목록 :', movies);
    } catch (error) {
        console.log('에러발생', error);
    } finally {
        loading = false;
    }
};
