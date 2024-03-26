import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root/Root";
import Home from "./routes/home/Home";
import BookDetails from "./routes/bookDetails/BookDetails";
import ListedBooks from "./routes/listedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/book/:bookId",
        Component: BookDetails,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/listed-books",
        Component: ListedBooks,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
