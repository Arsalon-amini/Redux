import { Map } from 'immutable'; //an immutable hashmap (key-value) from library


let book = Map({ title: "Harry Potter"}); //creates a map object

function publish(book){
    return book.set("isPublished", true); //returns a new obj.
}

book = publish(book); 

console.log(book.toJS()); 

//console.log(book.get("title")); 

