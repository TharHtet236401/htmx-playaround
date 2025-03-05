const createEditFormTemplate = (book) => {
  return /*html*/ `
  <form>
    <input type="text" name="title" placeholder="Title" required value="${book.title}">
    <input type="text" name="author" placeholder="Author" required value="${book.author}">
    <button type="submit">Save</button>
  </form>
`;
};

export default createEditFormTemplate;
