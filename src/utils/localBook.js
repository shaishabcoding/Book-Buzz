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
const removeLocalBook = (mode, id) => {
  const books = getLocalBooks(mode);
  const newBooks = books.filter((book) => book !== +id);
  console.log(books);
  localStorage.setItem(mode, JSON.stringify(newBooks));
};

export { getLocalBooks, addLocalBook, hasLocalBook, removeLocalBook };
