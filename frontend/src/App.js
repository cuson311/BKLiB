import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ListPage from "./pages/Admin/ListPage/ListPage";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import Login from "./pages/Login/login";
import { useEffect, useState } from "react";
import axios from "axios";
import Homepage from "./pages/User/HomePage/HomePage";
import SelectMember from "./pages/Login/selectmember";
import BookDetailPage from "./pages/User/BookDetailPage/BookDetailPage";
import SearchPage from "./pages/User/SearchPage/SearchPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
function App() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
        setSearchResults(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header books={books} setSearchResults={setSearchResults} />
        <section>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/searchpage"
              element={<SearchPage searchResults={searchResults} />}
            />
            <Route path="/bookdetailpage/:ISBN" element={<BookDetailPage />} />
            <Route path="/selectmember/*" element={<SelectMember />} />
            <Route
              path="/user/login"
              element={<Login func="login" title="user" />}
            />
            <Route
              path="/admin/login"
              element={<Login func="login" title="admin" />}
            />
            <Route
              path="/register"
              element={<Login func="register" title="user" />}
            />
            <Route path="/admin/">
              <Route path="books/*" element={<ListPage />} />
              <Route path="dashboard/*" element={<Dashboard />} />
            </Route>
            {/* <Route path='/books/*' element={<Book />} /> */}
          </Routes>
        </section>
        <Footer />
      </Router>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/adminlist/*' element={<ListPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
