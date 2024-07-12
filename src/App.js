import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage.js";
import { Login } from "./components/Login.js";
import { NotFound } from "./components/NotFound.js";
import { AddAuthor } from "./components/AddAuthor.js";
import { AuthorDetail } from "./components/AuthorDetail.js";
import { BookList } from "./components/BookList.js";
import { BookDetail } from "./components/BookDetail.js";
import { AddBook } from "./components/AddBook.js";
import { AuthorList } from "./components/AuthorList.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<BookDetail />} />
          <Route path="new" element={<AddBook />} />
        </Route>
        <Route path="/authors">
          <Route index element={<AuthorList />} />
          <Route path=":id" element={<AuthorDetail />} />
          <Route path="new" element={<AddAuthor />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
