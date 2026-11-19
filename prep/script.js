const film1 = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const film2 = {
  title: "Typist Artist Pirate King",
  directory: "Carol Morley",
  times: ["15:00", "20:00"],
  certificate: "12A",
  duration: 108,
};

function createFilmTitle() {
  const filmTitle = document
    .getElementById("film-card")
    .content.cloneNode(true);

  filmTitle.querySelector("h3").textContent = film1.title;
  filmTitle.querySelector("p").textContent = film1.director;

  return filmTitle;
}

document.body.append(createFilmTitle(film1), createFilmTitle(film2));
