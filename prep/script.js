const state = {
  films: [
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
    {
      title: "Pirates of the caribbean ",
      director: "Moses",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 108,
    },
    {
      title: "Ocean Eleven",
      director: "Molly",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 108,
    },
  ],
  searchTerm: "",
};

function createFilmTitle(film) {
  const filmTitle = document
    .getElementById("film-card")
    .content.cloneNode(true);

  filmTitle.querySelector("h3").textContent = film.title;
  filmTitle.querySelector("p").textContent = film.director;

  return filmTitle;
}

function render() {
  const filteredFilms = state.films.filter(function (film) {
    return film.title.includes(state.searchTerm);
  });
  const filmTitle = filteredFilms.map(createFilmTitle);

  document.getElementById("film-container").append(...filmTitle);
}

render();

const input = document.querySelector("input");
input.addEventListener("keyup", function () {
  state.searchTerm = input.value;
  document.getElementById("film-container").innerHTML = "";

  render();
});
