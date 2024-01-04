// JavaScript code​​​​​​‌​‌​​‌​​‌​​​‌​​​‌‌​​‌‌​‌​ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
// const showExpectedResult = true;
// const showHints = true;

// const bookTitle = "Alice's Adventures in Wonderland"
// const bookAuthor = "Lewis Carroll"
// const bookPubYear = 1865
// const bookISBN = 9798369203415

// Your code goes here

     function Book(title,author,publicationYear,ISBN)
    {
        this.bookName=title,
        this.bookAuthor=author,
        this.publicationYear=publicationYear,
        this.ISBN=ISBN
    };
    const newBook = new Book("Ramayanam", "valmiki", "3500 BC", null);
console.log(newBook);
