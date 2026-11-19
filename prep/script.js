const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

function createFilmTitle() {
  const filmTitle = document
    .getElementById("film-card")
    .content.cloneNode(true);

  filmTitle.querySelector("h3").textContent = film.title;
  filmTitle.querySelector("p").textContent = film.director;

  return filmTitle;
}

document.body.append(createFilmTitle(), createFilmTitle());
