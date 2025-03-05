const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
      <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
      <header>
        <h1>📚 My Reading List</h1>
      </header>

      <main>
        <div class="search">
          <input 
            hx-post="/books/search" 
            hx-trigger="keyup changed delay:300ms" 
            hx-target=".book-list" 
            type="text" 
            name="search" 
            placeholder="Search books by title..."
          >
          <div class="htmx-indicator">Searching...</div>
        </div>

        <div class="book-list">
          <button 
            hx-get="/books"  
            hx-target=".book-list"
            hx-indicator=".loading-books"
          >
            Load Books
            <span class="loading-books htmx-indicator">Loading...</span>
          </button>
        </div>

        <div class="add-book-form">
          <h2>📖 Add New Book</h2>
          <form>
            <input type="text" name="title" placeholder="Enter book title..." required>
            <input type="text" name="author" placeholder="Enter author name..." required>
            <button 
              hx-on::after-request="document.querySelector('form').reset()" 
              hx-post="/books" 
              hx-target=".book-list ul" 
              hx-swap="beforeend"
            >
              Add Book
              <span class="htmx-indicator">Adding...</span>
            </button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;