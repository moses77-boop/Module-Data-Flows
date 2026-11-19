const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
const filmTitle = document.createElement("h3");
const title = document.createElement("h1");
const director = document.createElement("p");

director.textContent = film.director;
title.textContent = film.title;
filmTitle.appendChild(title);
filmTitle.appendChild(director);

document.body.appendChild(filmTitle);
