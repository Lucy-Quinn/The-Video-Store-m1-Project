

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
                const overlay = document.createElement('article');
                const moviecontainer = document.createElement('div');

                article.setAttribute('class', 'movie-card');
                overlay.setAttribute('class', 'hidden');
                moviecontainer.setAttribute('class', 'movie-container');

                article.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />              
                `
                overlay.innerHTML = `
                <p>${movie.title}</>
                <p>${movie.genre_ids}
                <p>${movie.overview}
                <p>${movie.vote_average}
                `

                moviecontainer.appendChild(article)
                moviecontainer.appendChild(overlay)
                const filmId = document.getElementById('list-of-films');


                filmId.appendChild(moviecontainer)
                moviecontainer.addEventListener('click', showMovieDetails)

            })

            console.log('data', data);
        })
}
movieSelector();
// const listOfFilms = document.querySelector('.movie-container');
// listOfFilms.addEventListener('click', showMovieDetails);
// console.log('list', listOfFilms);

// document.addEventListener('click', function () {
//     if (document.querySelector('.movie-container')) {

//         const movie = document.querySelector('.movie-container')
//         console.log(movie);
//     }
// });

function showMovieDetails() {
    console.log('this', this);

    // this.classList.toggle('hidden')

    this.classList.toggle("movie-card");
}