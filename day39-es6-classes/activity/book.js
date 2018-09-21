// Create a class called Book to represent a book. A Book should include four pieces of information as instance variables‐a book name, an ISBN number, an author name and a publisher. Your class should have a constructor that initializes the four instance variables. Provide a method named getBookInfo that returns the description of the book as a String (the description should include all the information about the book). You should use this keyword in member methods and constructor.

class Book {
    constructor(bookName,iSBN,author,publisher) {
        this.bookName = bookName;
        this.iSBN = iSBN;
        this.author = author;
        this.publisher = publisher;
    }
    getBookInfo() {
        return `BOOKNAME: ${this.bookName} || ISBN: ${this.iSBN} || AUTHOR: ${this.author} || PUBLISHER: ${this.publisher}`;
    }
}

let b1 = new Book('Twilight','ABC123','John Mayer','Jeffrey Publishers');
console.log(b1.getBookInfo());

let b2 = new Book('Harry Potter','XYZ890','Stephen Knight','Johnson Publishers');
console.log(b2.getBookInfo());