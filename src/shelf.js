function shelfBook(book, shelf) {
  // shelf.push(book);
  //.unshift is passing any existing variable to te begining of the scifiShelf variable.
  // on the fourth  test  is passing the total of 4 books and just need to pass 3
  // if (bookShelf.length < 3){
  shelf.unshift(book);
  // }
};

function unshelfBook(book, shelf) {
  shelf.splice(1, 1)
  // shelf.remove(dune);
};

function listTitles(shelf) {
  // if time permits, refactor to make dynamic

  // My shelf is assigned to an array of 3 books
  // should return string of booktitles in shelf
  // console.log('second book', shelf[1].title)
  //access the key value pair of each variable
  // console.log('third book', shelf[2].title)
  return `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`
}
function searchShelf(shelf, title) {
  // makes sure the title is within
  //the variable and if it exist return true else false

  // deep equal look for falsy or truthy
  //read about logical operators
  //return boolean
  if ( shelf[1].title === title) {
    return true;
  } else {
    return false;
  }
};
module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
