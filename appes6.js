class Book {
    constructor(title,author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }

}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
    //Create table row element
    const row = document.createElement('tr');
    //Insert cols
    row.innerHTML= `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>`;

        list.appendChild(row);
        
    }

    showAlert(message, className) {
         //Create div
    const div = document.createElement('div');
    //Add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //Inesert alert
    container.insertBefore(div, form);

    //Timeout after 3 sec
setTimeout(function(){
    document.querySelector('.alert').remove;
},3000);

    }



    clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    }

}