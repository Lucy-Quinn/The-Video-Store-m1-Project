

function movieSelector() {

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d0d72ad03cd6e6a02d49e71b43050670')
        .then((response) => {
            console.log('response', response);
            return response.json();
        })
        .then((data) => {

            const moviesArray = data.results
            moviesArray.forEach((movie) => {

                //create elements
                const article = document.createElement('article');
                const overlay = document.createElement('article');
                const movieContainer = document.createElement('div');
                const stars = document.createElement('div');
                const rentFilm = document.createElement('div');
                const successRented = document.createElement('div');
                const heart = document.createElement('div');


                //set class attributes
                article.setAttribute('class', 'movie-card');
                movieContainer.setAttribute('class', 'movie-container');
                overlay.setAttribute('class', 'text-overlay');
                rentFilm.setAttribute('class', 'rent-film');

                //amending html/styling
                article.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`;

                rentFilm.innerHTML = `
                <button>Rent Movie</button>
                `
                successRented.innerHTML = `
                    <p class="success-rented">Enjoy your movie!</p>
                    <br>
                `

                stars.innerHTML = `
                <section id="all-stars">
                <i id="1" class="stars fas fa-star"></i>
                <i id="2" class="stars fas fa-star"></i>
                <i id="3" class="stars fas fa-star"></i>
                <i id="4" class="stars fas fa-star"></i>
                <i id="5" class="stars fas fa-star"></i>
                </section>
                       
                `
                overlay.innerHTML = `
                <h2>${movie.title}</h2>
                <br>
                <p class="genre">${getGenre(movie.genre_ids)}</p>
                <br>
                <p class"plot">${movie.overview}</p>
                <br>
                <p class="rating">Offical rating: ${movie.vote_average} <i class="stars-full fas fa-star"></i></p>
                <br>
                `

                heart.innerHTML = `
                <i class="fas fa-heart"></i>
                
                `
                //append elements to
                movieContainer.appendChild(article)
                movieContainer.appendChild(overlay)
                movieContainer.appendChild(rentFilm)
                // movieContainer.appendChild(stars)
                // movieContainer.appendChild(heart)
                rentFilm.appendChild(heart)

                //append movieContainer to list-of-films
                const filmId = document.getElementById('list-of-films');
                filmId.appendChild(movieContainer)
                movieContainer.addEventListener('click', showMovieDetails)

                // Click 'Rent Movie' to show success message
                rentFilm.addEventListener('click', function () {
                    rentFilm.appendChild(successRented)
                })
                // stars.addEventListener('click', changeStars);
                heart.addEventListener('click', heartClick);

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
    // movieCard.classList.toggle('hide'); // comment out => may need it?


    // this.classList.toggle('text-show')

    // this.classList.toggle("hide");
}


function heartClick() {
    const heart = document.querySelector('.fa-heart');
    console.log(heart);

    heart.classList.toggle('heart-full')

}


// const heart = document.querySelector('.fa-heart');
// heart.addEventListener('click', heartClick);

function changeStars(event) {
    const targettedStar = event.target;
    const starId = parseInt(targettedStar.id);
    let starStringId = '';
    console.log(targettedStar);
    for (let i = 1; i <= starId; i++) {
        starStringId = i;
        let turnGold = document.getElementById(`${starStringId}`);
        turnGold.style.color = 'gold';
    }

    for (let i = 5; i >= starId; i--) {
        starStringId = i;
        let turnGold = document.getElementById(`${starStringId}`);
        console.log('turngold', turnGold);
        turnGold.style.color = 'white';
    }
    // stars.querySelector('.stars')
    // console.log(stars);
    // // stars.setAttribute('class', 'stars')
    // stars.classList.toggle("stars-full")

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




