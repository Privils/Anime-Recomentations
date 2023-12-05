function ready() {
  const sciFi = document.getElementsByClassName("sci-fi");
  for (let i = 0; i < sciFi.length; i++) {
    let button = sciFi[i];
    button.addEventListener("click", scifiAnime);
  }
  const adventure = document.getElementsByClassName("adventure");
  for (let i = 0; i < adventure.length; i++) {
    let button = adventure[i];
    button.addEventListener("click", AdventureAnime);
  }
  const romance = document.getElementsByClassName("romance");
  for (let i = 0; i < romance.length; i++) {
    let button = romance[i];
    button.addEventListener("click", romanceAnime);
  }
  const action = document.getElementsByClassName("action");
  for (let i = 0; i < action.length; i++) {
    let button = action[i];
    button.addEventListener("click", actionAnime);
  }
  const fantasy = document.getElementsByClassName("fantasy");
  for (let i = 0; i < fantasy.length; i++) {
    let button = fantasy[i];
    button.addEventListener("click", actionAnime);
  }
}
ready();
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", AnimeData);
} else {
  ready();
}

const main = document.getElementById("main");
async function myAnime() {
  const id = "1250";
  const url = `https://api.jikan.moe/v4/anime/${id}/recommendations`;

  try {
    let response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
async function AnimeData() {
  main.innerHTML = "";
  let myAnimeData = await myAnime();
  myAnimeData.data.forEach((values) => {
    const html = document.createElement("div");
    html.classList.add("movie");
    html.innerHTML = `
    <img src=${values.entry.images.jpg.image_url} alt="""/>
    <div class="movie-info">
        <h2>${values.entry.title}</h2>
        <span>Votes: ${values.votes}</span>
    </div>
   `;
    main.appendChild(html);
  });
}
AnimeData();

const searchInput = document.getElementById("search");
const form = document.getElementById("form");
form.addEventListener("submit", searchResults);

function searchResults(event) {
  event.preventDefault();
  const searchQuery = searchInput.value;
  const searchUrl = `https://api.jikan.moe/v4/anime?q=${searchQuery}`;
  fetch(searchUrl)
    .then((response) => response.json())
    .then((animedata) => {
      main.innerHTML = "";
      animedata.data.forEach((value) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("movie");
        newDiv.innerHTML = `
          <img src="${value.images.jpg.image_url}" alt=""/>
          <div class="movie-info">
            <h2>${value.title}</h2>
            <span> ${value.type}</span>
          </div>`;
        main.appendChild(newDiv);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}
async function actionEvents() {
  const actionUrl = "https://api.jikan.moe/v4/anime";
  try {
    let actionData = await fetch(actionUrl);
    return actionData.json();
  } catch (error) {
    console.log(error);
  }
}
async function FantasyAnime() {
  let actionData = await actionEvents();
  main.innerHTML = "";
  actionData.data.forEach((values) => {
    if (values.genres.some((genre) => genre.name === "Fantasy")) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("movie");
      newDiv.innerHTML = `
        <img src="${values.images.jpg.image_url}" alt=""/>
        <div class="movie-info">
          <h2>${values.title}</h2>
          <span>${values.type}</span>
        </div>`;
      main.appendChild(newDiv);
    } else {
      console.log("Not found");
    }
  });
}
async function actionEvents() {
  const actionUrl = "https://api.jikan.moe/v4/anime";
  try {
    let actionData = await fetch(actionUrl);
    return actionData.json();
  } catch (error) {
    console.log(error);
  }
}
async function actionAnime() {
  let actionData = await actionEvents();
  main.innerHTML = "";
  actionData.data.forEach((values) => {
    if (values.genres.some((genre) => genre.name === "Action")) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("movie");
      newDiv.innerHTML = `
        <img src="${values.images.jpg.image_url}" alt=""/>
        <div class="movie-info">
          <h2>${values.title}</h2>
          <span>${values.type}</span>
        </div>`;
      main.appendChild(newDiv);
    } else {
      console.log("Not found");
    }
  });
}
async function actionEvents() {
  const actionUrl = "https://api.jikan.moe/v4/anime";
  try {
    let actionData = await fetch(actionUrl);
    return actionData.json();
  } catch (error) {
    console.log(error);
  }
}
async function romanceAnime() {
  let actionData = await actionEvents();
  main.innerHTML = "";
  actionData.data.forEach((values) => {
    if (values.genres.some((genre) => genre.name === "Romance")) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("movie");
      newDiv.innerHTML = `
        <img src="${values.images.jpg.image_url}" alt=""/>
        <div class="movie-info">
          <h2>${values.title}</h2>
          <span>${values.type}</span>
        </div>`;
      main.appendChild(newDiv);
    } else {
      console.log("Not found");
    }
  });
}

async function actionEvents() {
  const actionUrl = "https://api.jikan.moe/v4/anime";
  try {
    let actionData = await fetch(actionUrl);
    return actionData.json();
  } catch (error) {
    console.log(error);
  }
}
async function AdventureAnime() {
  let actionData = await actionEvents();
  main.innerHTML = "";
  actionData.data.forEach((values) => {
    if (values.genres.some((genre) => genre.name === "Adventure")) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("movie");
      newDiv.innerHTML = `
        <img src="${values.images.jpg.image_url}" alt=""/>
        <div class="movie-info">
          <h2>${values.title}</h2>
          <span>${values.type}</span>
        </div>`;
      main.appendChild(newDiv);
    } else {
      console.log("Not found");
    }
  });
}

async function actionEvents() {
  const actionUrl = "https://api.jikan.moe/v4/anime";
  try {
    let actionData = await fetch(actionUrl);
    return actionData.json();
  } catch (error) {
    console.log(error);
  }
}
async function scifiAnime() {
  let actionData = await actionEvents();
  main.innerHTML = "";
  actionData.data.forEach((values) => {
    if (values.genres.some((genre) => genre.name === "Sci-Fi")) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("movie");
      newDiv.innerHTML = `
        <img src="${values.images.jpg.image_url}" alt=""/>
        <div class="movie-info">
          <h2>${values.title}</h2>
          <span>${values.type}</span>
        </div>`;
      main.appendChild(newDiv);
    } else {
      console.log("Not found");
    }
  });
}
