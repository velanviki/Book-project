import React from "react";
import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";

import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
  const user = localStorage.getItem("token");
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {user && <Route path="/books" exact element={<Books/>} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />

          <Route path="/add" element={user ? <AddBook /> : <Signup />} />
          <Route
            path="/books"
            element={user ? <Books /> : <Signup />}
            
          />
          {/* <Route path="/about" element={user?<About />:<Register/>} exact /> */}

          <Route path="/books/:id" element={<BookDetail />}  />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;