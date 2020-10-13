import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    //takes 1st arg (initial state), 2nd arg (immutable state)
    draftBook.isPublished = true; //takes copy of book, applies changes here to that copy
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
