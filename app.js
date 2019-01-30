// Setup
// -----------------------------------------------------------------------------
// #############################################################################

const express = require("express");

const app = express();

app.listen(5555, () => {
  console.log("Express app is READY to ROLL 👍");
});

// Connect the "public/" folder to our Express app
// (makes files inside "public/" available through our app's domain)
app.use(express.static(__dirname + "/public"));

// Use the "hbs" npm package for your template engine (a.k.a. view engine)
// (this also automatically requires the "hbs" npm package)
app.set("view engine", "hbs");

// Uncomment the next line if you want to change the name of the "views/" folder
// app.set("views", __dirname + "/some-other-folder");

// Routes
// -----------------------------------------------------------------------------
// #############################################################################
app.get("/", (request, response, next) => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  console.log("Chose this song:", songs[randomIndex]);

  // information to send to the HBS template file
  const infoToSend = {
    featuredSong: songs[randomIndex]
  };

  // "render()" sends the processed HTML from this HBS file to the browser
  // (it already knows to look inside the "views/" folder for this file)
  response.render("index.hbs", infoToSend);
});

app.get("/playlist", (request, response, next) => {
  // send the "songs" array to the HBS file with the name "songList"
  // ("locals" refers to local variables IN THE HBS FILE)
  response.locals.songList = songs;

  // "render()" sends the processed HTML from this HBS file to the browser
  // (it already knows to look inside the "views/" folder for this file)
  response.render("playlist-page.hbs");
});

// FAKE Database
// -----------------------------------------------------------------------------
// #############################################################################
const songs = [
  {
    title: "I Wanna Be Your Dog",
    artist: "The Stooges",
    year: 1969,
    photoUrl:
      "https://i.scdn.co/image/e8c790bcdd6516c13d59cc47876a1664b2f81f4d",
    comment: "Because I love dogs."
  },
  {
    title: "Child In Time",
    artist: "Deep Purple",
    year: 1970,
    photoUrl:
      "https://i.scdn.co/image/15d56668ef4e7e2e912227caeb749fcd361cccf8",
    comment: null
  },
  {
    title: "Under The Bridge",
    artist: "Red Hot Chili Peppers",
    year: 1991,
    photoUrl:
      "https://i.scdn.co/image/5a6a1c6514398dc4004c6348a83d77694a3883d4",
    comment: null
  },
  {
    title: "Love Songs For Robots",
    artist: "Patrick Watson",
    year: 2015,
    photoUrl:
      "https://i.scdn.co/image/5ba7a20bdc314bd95751cd7610124b77b3b5cfe5",
    comment: "It's my morning alarm and it's soft."
  },
  {
    title: "Rock And Roll All Nite",
    artist: "KISS",
    year: 1975,
    photoUrl:
      "https://i.scdn.co/image/e7e91aa4a0e2fc508aa18450cf703b040673894f",
    comment: null
  },
  {
    title: "Banquet",
    artist: "Bloc Party",
    year: 2005,
    photoUrl:
      "https://i.scdn.co/image/7ec1bd06d971b461dc8ffc0830a342e05394237f",
    comment: "Pffffft... I don't know."
  }
];
