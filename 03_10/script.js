/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const somedayPack = new Backpack(
  "someday Backpack",
  30,
  "pink",
  15,
  20,
  20,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

console.log("The somedayPack object:", somedayPack);
console.log("The pocketNum value:", somedayPack.pocketNum);
