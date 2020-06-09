// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {
// Add Book to List
UI.prototype.addBookToList = function(book){
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

//Show alert
UI.prototype.showAlert = function(message, className) {
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


//Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

}


//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('title').Value, 
          author = document.getElementById('author').Value,
          isbn =   document.getElementById('isbn').Value

    // Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === '' ) {
        // Error alert
        UI.showAlert('Please fill in all fields', 'error');
    } else {
         //Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');

    //Clear fields
      ui.clearFields();
    }


    e.preventDefault();
});