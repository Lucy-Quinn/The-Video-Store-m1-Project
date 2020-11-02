

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
                <p>${getGenre(movie.genre_ids)}</p>
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


function getGenre(genreArr) {
    // const genreStr = String(genre);
    // const romance = '10749';
    // const drama = '35'
    // const comedy = '18'
    // const action = '28'
    // const crime = '80'
    // const animation = '16'
    // const history = '36'
    // const war = '10752'
    // const thriller = '53'
    // const adventure = '12'
    // const music = '10402'
    // const fantasy = '14'
    // const family = '10751'
    let finalGenre = ''
    genreArr.forEach((genre) => {
        switch (genre) {
            case 10749:
                finalGenre += 'Romance, ';
                break;
            case 35:
                finalGenre += 'Drama, ';
                break;
            case 18:
                finalGenre += 'Comedy, ';
                break;
            case 28:
                finalGenre += 'Action, ';
                break;
            case 80:
                finalGenre += 'Crime, ';
                break;
            case 16:
                finalGenre += 'Animation, ';
                break;
            case 36:
                finalGenre += 'History, ';
                break;
            case 10752:
                finalGenre += 'War, ';
                break;
            case 53:
                finalGenre += 'Thriller, ';
                break;
            case 12:
                finalGenre += 'Adventure, ';
                break;
            case 10402:
                finalGenre += 'Music, ';
                break;
            case 14:
                finalGenre += 'Fantasy, ';
                break;
            case 10751:
                finalGenre += 'Family, ';
                break;
            default:
                finalGenre += 'Genre not provided'
                break;
        }
    })
    return finalGenre.slice(0, -2)

}




