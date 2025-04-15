import "./Imdb.css";
import Imdb from "./Imdb";
import Movie from "./components/Movie";
import SignIn from "./components/SignIn";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Imdb />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/movie/:movieTitle" element={<Movie />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
