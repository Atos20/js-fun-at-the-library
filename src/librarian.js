class Librarian {
  constructor(name, library) {
    this.name = name ;
    this.library = library ;
  }
  greetPatron(name) {
    if (time === true) {
    //console.log('this refers to the object\'s name',this.name);
      return (`Good morning, ${name}!`)
    }
    // else if (this.name === 'Amy') {
    //   return (`Good morning, ${name}!`)
    // }
  }
}

//this is not a function but a method
//methods don't need the word function


// expect that when socott.greetPatron is called
// with the argument (name, greeting)
// it will return , Hello scott!
module.exports = Librarian;
