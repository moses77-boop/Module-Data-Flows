const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
const filmTitle = document.createElement("h3");
const title = document.createElement("h1");
title.textContent = film.title;
filmTitle.appendChild(title);

document.body.appendChild(filmTitle);
