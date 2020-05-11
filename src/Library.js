
//creeate a function with the name createLibrary

/*expect that the function denverLibray
contains an object with the key name
and a string value of 'Denver Public Library'*/




function createLibrary(name) {
  var library = {
    name : name,
    shelves : {fantasy : [], fiction : [], nonFiction : []},
  }
  return library;
}
//I have a dracula object with 4 diff key
//value pairs
//I need to add the dracula object to the fantasy[0] shelfBook
//make a condition that assigns the correct
//book to the right shelf
//if the genre is fantasy, then push the book to the shelve fantasy
//but if the genre is nonFiction the push the boook the the nonFiction shelves
// else any
function addBook(library, book){
  // console.log(book);
  //logs 2 book objects
// console.log('denverPublicLibrary', library);//logs the library object
  if (book.genre === 'fantasy') {
      library.shelves.fantasy.push(book);
    } else if (book.genre === 'nonFiction') {
      library.shelves.nonFiction.push(book);
    } else if (book.genre === 'fiction') {
      library.shelves.fiction.push(book);
    }
    //how can I make to ge
  //   return library.shelves.fantasy.unshift(title);
//console.log(library.shelves.fantasy)// empty array
 }

function checkoutBook(library, bookTitle) {
  // console.log('^^^^current library with all books^^^', library);
  // console.log('this is the book title', bookTitle);
  //after the checckOut Book  function is invoke with
  //expecting that the library shelves are assigned
  //to a book except for the fiction shelve

// console.log('^^^^this is the object^^^', library.shelves.fiction[0]);
    console.log(library.shelves.fiction[0]);
//     if (library.shelves.fiction[0].title === bookTitle) {
//       library.shelves.fiction.pop(0);
//         // console.log('_________current library with out prideAndPrejudice', library);
//         // console.log("___",bookTitle);
//       return `You have now checked out ${bookTitle} from the Denver Public Library`
//     } else if (library.shelves.fiction[0] === undefined) {
//     return `Sorry, there are currently no copies of "The Fifth Season" available at the Denver Public Library`
//   }
// }
  if (library.shelves.fiction[0] === undefined) {
    return "Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library";
  } else if (library.shelves.fiction[0].title === bookTitle) {
    library.shelves.fiction.pop(0)
    return `You have now checked out ${bookTitle} from the Denver Public Library`;
  }
}
//it should only ckeckout a book if the book is on the shelfBook/
//
module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
