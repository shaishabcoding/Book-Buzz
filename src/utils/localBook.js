const getLocalBooks = (mode) => {
  const books = localStorage.getItem(mode);
  if (books) {
    return JSON.parse(books);
  }
  return [];
};
const hasLocalBook = (mode, id) => {
  const books = getLocalBooks(mode);
  return books.includes(+id);
};
const addLocalBook = (mode, id) => {
  const books = getLocalBooks(mode);
  books.push(+id);
  localStorage.setItem(mode, JSON.stringify([...new Set(books)]));
};

export { getLocalBooks, addLocalBook, hasLocalBook };
