// Three Pillars of JS - Prototype //

// Step 1 - Refactor the code to use prototypes instead of the 'class' keyword //

function Bookshelf(ownerName) {
  // Step 2 - Add a parameter called 'owner name' //
  this.ownerName = ownerName;
  this.favoriteBooks = [];
}

Bookshelf.prototype.addFavoriteBook = function (bookName) {
  if (!bookName.includes("Great")) {
    this.favoriteBooks.push(bookName);
  }
};

Bookshelf.prototype.printFavoriteBooks = function () {
  console.log(
    `${this.ownerName}'s Favorite Books: ${String(this.favoriteBooks.length)}`
  );
  for (let bookName of this.favoriteBooks) {
    console.log(bookName);
  }
};

// Step 3 - Add the alphabetical order sort function //

Bookshelf.prototype.sortFavoriteBooksByAlphabeticDescendingOrder = function () {
  this.favoriteBooks.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
};

// Step 4 - Cardbox constructor creation //

function CardBox(ownerName) {
  this.ownerName = ownerName;
  this.favoriteBooks = [];
}

CardBox.prototype = Bookshelf.prototype;

function loadBooks(bookshelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      bookshelf.addFavoriteBook(bookName);
    }
    bookshelf.sortFavoriteBooksByAlphabeticDescendingOrder(); // Step 3 execution //
    bookshelf.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

// Bookshelf test //
var myBooks = new Bookshelf("Jack"); // Step 2 Execution //
loadBooks(myBooks);

// Cardbox test //
var myGiftCards = new CardBox("Kevin");
loadBooks(myGiftCards); // Step 4 Execution //

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
