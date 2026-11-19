const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    director: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];

function createFilmTitle(film) {
  const filmTitle = document
    .getElementById("film-card")
    .content.cloneNode(true);

  filmTitle.querySelector("h3").textContent = film.title;
  filmTitle.querySelector("p").textContent = film.director;

  return filmTitle;
}

for(const film of films){
    const card = createFilmTitle(film);

    document.body.appendChild(card);
}