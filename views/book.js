const createBookTemplate = (book) => {
  return /*html*/ `
  <li 
    data-id="${book.id}"
    class="book-item"
  >
    <div 
      class="details" 
      hx-get="/books/edit/${book.id}" 
      hx-target="closest li" 
      hx-swap="outerHTML transition:true"
      hx-indicator=".edit-indicator"
    >
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <span class="edit-indicator htmx-indicator">Loading editor...</span>
    </div>
    <button 
      hx-delete="/books/${book.id}" 
      hx-target="closest li" 
      hx-swap="outerHTML swap:1s"
      hx-confirm="Are you sure you want to delete '${book.title}'?"
      hx-indicator=".delete-indicator"
    >
      <span>🗑️ Delete</span>
      <span class="delete-indicator htmx-indicator">Deleting...</span>
    </button>
  </li>
`;
};

export default createBookTemplate;

