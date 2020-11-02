

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
                moviecontainer.setAttribute('class', 'movie-container');
                overlay.setAttribute('class', 'text-overlay');

                article.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`;


                // article.innerHTML = `
                //     <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />              
                // `
                overlay.innerHTML = `
                <h2>${movie.title}</h2>
                <p>${movie.genre_ids}</p>
                <p>${movie.overview}</p>
                <p>${movie.vote_average}</p>
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


function showMovieDetails() {

    const overlay = this.querySelector('.text-overlay')
    const movieCard = this.querySelector('.movie-card');
    // console.log(movieCard);
    // overlay.setAttribute('class', 'text-show');

    overlay.classList.toggle('text-show');
    movieCard.classList.toggle('hide'); // comment out => may need it?


    console.log(overlay);
    // this.classList.toggle('text-show')

    // this.classList.toggle("hide");
}