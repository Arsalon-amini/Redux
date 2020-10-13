import { compose, pipe } from "lodash/fp"; //utility fns for functional programming

//non-functional style of programming
let input = "    Javascript   ";
let output = "<div>" + input.trim() + "</div>";

//functional programming style of programming
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div> ${str} </div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input))); //fn composition

//using lodash (compose)
const transform = compose(wrapInDiv, toLowerCase, trim); //HoF -> takes fns -> returns new fn -> NOTE: passing fn references, not calling fn
transform(input);

//using lodash (pipe)
const transform2 = pipe(trim, toLowerCase, wrapInDiv); //reads left to right (cleaner, more readable)
transform(input);
