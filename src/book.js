function createTitle(title) {
return 'The ' + title;
}

// function buildMainCharacter() {
//   var  character = {
//       name : 'Vassya',
//       age : 16,
//       pronouns : 'she/her'
//   }
//   return character;
// };

function buildMainCharacter(name, age, pronouns) {
  var  character = {
        name : name,
        age : age,
        pronouns : pronouns
      }
      return character;
}
function saveReview(review, reviews) {
  reviews.push(review);
  
  // if (review !== "I want everyone to read this book!"){
  // }
  return reviews;
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
     title : bookTitle,
     mainCharacter : bookCharacter,
     pageCount : calculatePageCount(bookTitle),
     genre : genre
  }
  return book;
};

function editBook(bookTitle) {
  console.log(bookTitle);
  bookTitle.pageCount = bookTitle.pageCount * .75;
  // return bookTitle.pageCount;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
