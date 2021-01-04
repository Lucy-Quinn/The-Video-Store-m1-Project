function movieSelector() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d0d72ad03cd6e6a02d49e71b43050670')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const moviesArray = data.results
            moviesArray.forEach((movie) => {

                //get element 
                const filmId = document.getElementById('list-of-films');

                //create elements
                const movieContainer = document.createElement('div');
                const article = document.createElement('article');
                const overlay = document.createElement('article');
                const rentFilm = document.createElement('div');
                const successRented = document.createElement('div');
                const stars = document.createElement('div');

                //set class attributes
                movieContainer.setAttribute('class', 'movie-container');
                article.setAttribute('class', 'movie-card');
                overlay.setAttribute('class', 'text-overlay');
                rentFilm.setAttribute('class', 'rent-film');

                //adding html code
                article.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`;

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

                rentFilm.innerHTML = `
                <button id="rent-button">Rent Movie</button>
                 <i class="fas fa-heart"></i>
                `

                successRented.innerHTML = `
                    <p class="success-rented">Enjoy your movie!</p>
                    <br>
                `

                stars.innerHTML = `
                <section id="all-stars">
                <i class="1${movie.title} stars fas fa-star"></i>
                <i class="2${movie.title} stars fas fa-star"></i>
                <i class="3${movie.title} stars fas fa-star"></i>
                <i class="4${movie.title} stars fas fa-star"></i>
                <i class="5${movie.title} stars fas fa-star"></i>
                </section> 
                `

                //append elements to movieContainer
                filmId.appendChild(movieContainer)
                movieContainer.appendChild(article)
                movieContainer.appendChild(overlay)
                movieContainer.appendChild(rentFilm)
                movieContainer.appendChild(stars)

                // Event listeners and functions for the over-lay
                article.addEventListener('click', function () {
                    overlay.classList.toggle('text-show');
                })
                overlay.addEventListener('click', function () {
                    overlay.classList.toggle('text-show');
                })

                //Event listener and function for heart toggle
                const hearts = movieContainer.querySelectorAll('.fa-heart');
                hearts.forEach((heart) => {
                    heart.addEventListener('click', function (event) {
                        const click = event.target
                        click.classList.toggle('heart-full')
                    })
                });

                // Event listener and function for success message on renting movie
                const rentButtons = rentFilm.querySelectorAll('#rent-button');
                rentButtons.forEach((rentButton) => {
                    rentButton.addEventListener('click', function (event) {
                        let button = event.target
                        rentFilm.appendChild(successRented)
                        setTimeout(function () {
                            rentFilm.removeChild(successRented)

                            button.style.backgroundColor = 'red';
                        }, 1500);
                        button.innerHTML = 'Movie Rented'
                    })
                })

                //Event listener and function for star ratings
                const starSet = movieContainer.querySelectorAll('.fa-star');
                starSet.forEach((star) => {
                    star.addEventListener('click', function (event) {
                        const targettedStar = event.target;
                        const starClass = targettedStar.classList.value.charAt(0)
                        let starStringId = '';
                        for (let i = 1; i <= starClass; i++) {
                            starStringId = i;
                            let turnGold = document.getElementsByClassName(`${starStringId}${movie.title}`)[0];
                            turnGold.style.color = 'gold';
                        }
                        for (let i = 5; i > starClass; i--) {
                            starStringId = i;
                            let turnGold = document.getElementsByClassName(`${starStringId}${movie.title}`)[0];
                            turnGold.style.color = 'white';
                        }
                    })
                });
            })
        })
}
movieSelector();



//Get genre function
function getGenre(genreArr) {
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







