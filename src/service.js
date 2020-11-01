

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
                <p>${movie.title}</>
                <p>${movie.genre_ids}
                <p>${movie.overview}
                <p>${movie.vote_average}
            `
                const filmId = document.getElementById('list-of-films');
                filmId.appendChild(article)
            })

            console.log('data', data);
        })
}
movieSelector();

function showMovieDetails() {
    let x = document.querySelector('.movie-card ');
    console.log(x);
    x.classList.toggle('class', 'hidden')

}

const listOfFilms = document.getElementById('list-of-films');
listOfFilms.addEventListener('click', showMovieDetails);

// this container class has all the shared elements. height and width - so it won't rezise when the contents change


//    function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


// image.setAttribute('class', 'hide-image show-movie-description');
// console.log(image);


/* <div class="container">
<div class="toggle-false">
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
</div>
<div class="toggle-true">
<p>${movie.title}</>
<p>${movie.genre_ids}
<p>${movie.overview}
<p>${movie.vote_average}
</div>
</div> */

    // // var x = document.getElementById('list-of-films');
    // var x = document.querySelectorAll('.toggle-false')
    // var y = document.querySelectorAll('.toggle-true')

    // for (let index = 0; index < x.length; index++) {
    //     if (x[index].style.display === "none") {
    //         x[index].style.display = "block";
    //         y[index].style.display = "none";

    //     } else {
    //         x[index].style.display = "none";
    //         y[index].style.display = "block";

    //     }

    // }
    // console.log(x);