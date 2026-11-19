const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
const filmTitle = document.getElementById("film-card").content.cloneNode(true);

filmTitle.querySelector("h3").textContent = film.title;
filmTitle.querySelector("p").textContent = film.director;



document.body.appendChild(filmTitle);
