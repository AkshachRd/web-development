const films = ["first_film", "second_film", "third_film", "fourth_film", "fifth_film", "sixth_film", "seventh_film", "eighth_film", "ninth_film", "tenth_film"]

const leftArrow = document.getElementById('left_arrow');
leftArrow.onclick = () => scrollFilmsToTheLeft(films);
const rightArrow = document.getElementById('right_arrow_background');
rightArrow.onclick = () => scrollFilmsToTheRight(films);

function scrollFilmsToTheLeft(films) {
  let filmFrom, filmTo;

  const tmp = document.getElementById("tenth_film").innerHTML;
  for (let i = films.length - 2; i >= 0; i--) {
    filmFrom = document.getElementById(films[i]);
    filmTo = document.getElementById(films[i + 1]);

    filmTo.innerHTML = filmFrom.innerHTML;
  }
  document.getElementById("first_film").innerHTML = tmp;
}

function scrollFilmsToTheRight(films) {
  let filmFrom, filmTo;

  const tmp = document.getElementById("first_film").innerHTML;
  for (let i = 1; i <= 9; i++) {
    filmFrom = document.getElementById(films[i]);
    filmTo = document.getElementById(films[i - 1]);

    filmTo.innerHTML = filmFrom.innerHTML;
  }
  document.getElementById("tenth_film").innerHTML = tmp;
}
