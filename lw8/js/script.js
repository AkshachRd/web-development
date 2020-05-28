const films = ["first_film", "second_film", "third_film", "fourth_film", "fifth_film", "sixth_film", "seventh_film", "eighth_film", "ninth_film", "tenth_film"]

const left_arrow = document.getElementById('left_arrow');
left_arrow.onclick = () => scrollFilmsToTheLeft(films);
const right_arrow = document.getElementById('right_arrow_background');
right_arrow.onclick = () => scrollFilmsToTheRight(films);

function scrollFilmsToTheLeft(films) {
  let film_from, film_to;

  const tmp = document.getElementById("tenth_film").innerHTML;
  for (let i = films.length - 2; i >= 0; i--) {
    film_from = document.getElementById(films[i]);
    film_to = document.getElementById(films[i + 1]);

    film_to.innerHTML = film_from.innerHTML;
  }
  document.getElementById("first_film").innerHTML = tmp;
}

function scrollFilmsToTheRight(films) {
  let film_from, film_to;

  const tmp = document.getElementById("first_film").innerHTML;
  for (let i = 1; i <= 9; i++) {
    film_from = document.getElementById(films[i]);
    film_to = document.getElementById(films[i - 1]);

    film_to.innerHTML = film_from.innerHTML;
  }
  document.getElementById("tenth_film").innerHTML = tmp;
}
