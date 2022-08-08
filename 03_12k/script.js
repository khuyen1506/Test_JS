import Waterbottle from "./waterbottle.js";
const drinkWaterbottle = new Waterbottle(
  "Stream Water",
  "plastic",
  "white",
  20,
  60,
  false,
  "December 5, 2021 15:00:00 PST"
);

console.log("The Drinking Watter bottle:", drinkWaterbottle);
console.log("The since date expri:", drinkWaterbottle.dateExpire);
console.log("Since date expire:", drinkWaterbottle.DateExpire());
