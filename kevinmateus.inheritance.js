// Three Pillars of JS - Prototypal Inheritance //

// Step 1 - Create the parent function "Bookstorage" //

function BookStorage(ownerName) {
  this.ownerName = ownerName;
  this.favoriteBooks = [];
}

// Step 2 - Move all properties and methods from bookshelf and CardBox to BookStorage //

BookStorage.prototype.addFavoriteBook = function (bookName) {
  if (!bookName.includes("Great")) {
    this.favoriteBooks.push(bookName);
  }
};

BookStorage.prototype.printFavoriteBooks = function () {
  console.log(
    `${this.ownerName}'s Favorite Books: ${String(this.favoriteBooks.length)}`
  );
  for (let bookName of this.favoriteBooks) {
    console.log(bookName);
  }
};

BookStorage.prototype.sortFavoriteBooksByAlphabeticDescendingOrder =
  function () {
    this.favoriteBooks.sort((a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
  };

// Step 3 - // Extend Bookshelf and Cardbox from Bookstorage

function Bookshelf(ownerName) {
  this.ownerName = ownerName;
  this.favoriteBooks = [];
}

Bookshelf.prototype = BookStorage.prototype;

function CardBox(ownerName) {
  this.ownerName = ownerName;
  this.favoriteBooks = [];
}

CardBox.prototype = BookStorage.prototype;

function loadBooks(Bookstorage) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      Bookstorage.addFavoriteBook(bookName);
    }
    Bookstorage.sortFavoriteBooksByAlphabeticDescendingOrder();
    Bookstorage.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

// Bookstorage test //
var myBooks = new BookStorage("Jack");
loadBooks(myBooks);

// Bookshelf test //
var kevinBooks = new Bookshelf("Kevin");
loadBooks(kevinBooks);

// CardBox test //
var doraBooks = new CardBox("Dora");
loadBooks(doraBooks);

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
