const createBookTemplate = (book) => {
  return /*html*/ `
  <li data-id="${book.id}">
     <div class="details" hx-get="/books/edit/${book.id}" hx-target="closest li" hx-swap="outerHTML">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
     </div>
     <button 
        hx-delete="/books/${book.id}" 
        hx-target="closest li" 
        hx-swap="outerHTML"
        hx-confirm="Are you sure you want to delete this book?"
     >
        <span>Delete</span>
        <span class="htmx-indicator">Deleting...</span>
     </button>
  </li>
`;
};

export default createBookTemplate;

