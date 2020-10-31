

function movieSelector() {

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d0d72ad03cd6e6a02d49e71b43050670')
        .then((response) => {
            console.log('response', response);
            return response.json();
        })
        .then((data) => {

            const moviesArray = data.results
            moviesArray.forEach((movie) => {
                const article = document.createElement('article');
                article.setAttribute('class', 'movie-card');
                article.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
            
            `
                const filmId = document.getElementById('list-of-films');
                filmId.appendChild(article)
            })

            console.log('data', data);
        })
}
movieSelector();

// <p>${movie.title}</>
//             <p>${movie.genre_ids}
//             <p>${movie.overview}
//             <p>${movie.vote_average}





