console.log("Arrow Function Exercise");

const divide = (x, y) => x / y;
console.log(divide(10, 5));

const whisper = (word) => word.toLowerCase();
console.log(whisper("Yo"));

const shorterThan = (firstArr, secondArr) => firstArr.length < secondArr.length;
console.log(
  shorterThan([1, 2, 3, 4, 5], [1, 2, 3, 4])
);

const buttonEl = document.querySelector("button");
buttonEl.setAttribute("disabled", '');

let response = await fetch("https://dog.ceo/api/breed/hound/list");
console.log(await response.json());
console.log("should run after?");
buttonEl.style.backgroundColor = "blue";

// destructuring

const cupParts = {
  cylinder: "round",
  ear: "square",
  lid: "triangle"
};

let { ear } = cupParts;
console.log(ear);

const fruits = ["orange", "chico", "mango"];

let [fave, juicy, tangy] = fruits;
console.log(fave);

let [firstName, midName, lastName] = "Universal Serial Bus".split(" ");
console.log(firstName);