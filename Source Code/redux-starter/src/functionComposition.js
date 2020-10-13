//non-functional style of programming
let input = "    Javascript   ";
let output = "<div>" + input.trim() + "</div>";

//functional programming style of programming
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div> ${str} </div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input))); //fn composition
