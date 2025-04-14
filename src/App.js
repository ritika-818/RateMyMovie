import "./Imdb.css";
import Imdb from "./Imdb";
import Movie from "./components/Movie";
import SignIn from "./components/SignIn";
import {Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
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
