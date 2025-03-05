const createEditFormTemplate = (book) => {
  return /*html*/ `
  <form>
    <input type="text" name="title" placeholder="Title" required value="${book.title}">
    <input type="text" name="author" placeholder="Author" required value="${book.author}">
    <button type="submit"  hx-put="/books/${book.id}" hx-target="closest form" hx-swap="outerHTML">Save</button>
  </form>
`;
};

export default createEditFormTemplate;
