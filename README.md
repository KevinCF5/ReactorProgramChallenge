# Three Pillars of JS - Prototype Version

This is an extra exercise to practice and apply the `this` / Prototype pillar.
Instructions 1 to 4 (included) are **required** for this exercise.
Instruction 5 is **optional**.

## Instructions

Start with the "Three Pillars of JS" solution that is on the file `ex.js`.

1. **Required!** Refactor the code to **NOT** use the `class` keyword and instead use Prototypes to achieve the same outcome as the last exercise.

2. **Required!** Add a parameter to the `Bookshelf` constructor function `ownerName`. Use that value on the `printFavoriteBooks()` function's first `console.log`. Expect output: `Jack's Favorite Books: 3`.

3. **Required!** Add a new function `sortFavoriteBooksByAlphabeticDescendingOrder()` to the `Bookshelf` methods. Implement the function such that the favorite books are sorted on a alphabetic descending order.
   e.g.:

   - Original order:

     - "Crime & Punishment"
     - "A Song of Ice and Fire"
     - "You Don't Know JS"

   - Alphabetic Descending Order:

     - "You Don't Know JS"
     - "Crime & Punishment"
     - "A Song of Ice and Fire"

   Hint: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

4. **Required!** Create a new constructor function `CardBox` (**without** using the `class` keyword) with the same properties as the `Bookshelf` function. And **reuse** the same methods from the `BookShelf` in the `CardBox` **WITHOUT** redeclaring them.

5. **Optional!** This is an extra optional challenge. It's more challenging because you'll need to search on your own how to solve it. The shared tutorial does not teach you how to do it. Feel free to search the web and give it a go.
   Let's check the instructions:
   Looking at the end result after the first 4 instructions you'll notice that the `Bookshelf` and the `CardBox` create two very similar types of objects. Both have the same properties and the same methods.
   This is a clear sign that we could use inheritance and avoid some duplicate code.
   So the objective is, using _Prototypal Inheritance_, refactor the code from instruction 4 so that the program has the exact same output.

- Create a new file called `ex.inheritance.js`. Use this file for the new inheritance version.
- Create a parent function called `BookStorage`.
- Move all shared properties and methods from `Bookshelf` and `CardBox` to the `BookStorage`.
- "Extend" (**without** using the `extends` keyword) `BookShelf` and `CardBox` from `BookStorage`
