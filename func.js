const fdk = require("@autom8/fdk");
const a8 = require("@autom8/js-a8-fdk");
const fetch = require("node-fetch");

fdk.handle(function(input) {
  return fetch(`https://api.whatdoestrumpthink.com/api/v1/quotes/random`)
    .then(response => response.json())
    .then(response => response);
});

fdk.discord(function(result) {
  //my random names for the donald.
  let authors = [
    "mini hands",
    "The Donald",
    "Don Don Izakaya",
    "Donnie",
    "Sir Orange is the new Black",
    "Overgrown Oompa Loompa",
    "Tupay man",
    "Russia's Friend",
    "Swamp Drainer",
    "Mr Great Again",
    "Dude with a Mood"
  ];
  let index = Math.floor(Math.random() * authors.length);
  return {
    content: `${result.message} - **${authors[index]}**`,
    embed: {
      description: `Powered by [What Does Trump Think](https://whatdoestrumpthink.com)`
    }
  };
});
