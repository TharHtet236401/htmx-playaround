const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
      <header>
        <h1>📚 My Reading List</h1>
      </header>

      <main>
        <div class="search">
          <input 
            type="text" 
            name="search" 
            placeholder="Search books by title..."
            hx-post="/books/search" 
            hx-trigger="keyup changed delay:300ms, search" 
            hx-target=".book-list" 
            hx-indicator=".search-indicator"
          >
          <div class="search-indicator htmx-indicator">Searching...</div>
        </div>

        <div class="book-list">
          <button 
            hx-get="/books"  
            hx-target=".book-list"
            hx-indicator=".loading-books"
            hx-swap="innerHTML transition:true"
          >
            <span>📖 Load Books</span>
            <span class="loading-books htmx-indicator">Loading...</span>
          </button>
        </div>

        <div class="add-book-form">
          <h2>📖 Add New Book</h2>
          <form>
            <input 
              type="text" 
              name="title" 
              placeholder="Enter book title..." 
              required
              autocomplete="off"
            >
            <input 
              type="text" 
              name="author" 
              placeholder="Enter author name..." 
              required
              autocomplete="off"
            >
            <button 
              hx-post="/books" 
              hx-target=".book-list ul" 
              hx-swap="beforeend transition:true"
              hx-indicator=".adding-indicator"
              hx-on::after-request="this.closest('form').reset()"
            >
              <span>📚 Add to Library</span>
              <span class="adding-indicator htmx-indicator">Adding...</span>
            </button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;