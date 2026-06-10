import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { useCallback, useState } from "react";

import Home from "./pages/Home.jsx";
import MyWatchlist from "./pages/MyWatchlist.jsx";
import AddMovie from "./pages/AddMovie.jsx";
import EditMovie from "./pages/EditMovie.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Explore from "./pages/Explore.jsx";

function Nav() {
  const linkClass = ({ isActive }) =>
      isActive
          ? "rounded-full bg-sky-700 px-4 py-2 text-white shadow-md"
          : "rounded-full px-4 py-2 text-sky-900 hover:bg-sky-100";

  return (
      <nav className="border-b border-sky-200 bg-white px-8 py-4 shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-2xl font-extrabold text-sky-800">NextWatch</h2>

          <div className="flex flex-wrap justify-center gap-2 font-semibold">
            <NavLink to="/" end className={linkClass}>Home</NavLink>

            <NavLink to="/watchlist" className={linkClass}>My Watchlist</NavLink>

            <NavLink to="/add" className={linkClass}>Add Movie</NavLink>

            <NavLink to="/explore" className={linkClass}>Explore</NavLink>
          </div>
        </div>
      </nav>
  );
}

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = useCallback((movie) => {
    setMovies((prevMovies) => {
      const foundMovie = prevMovies.find((item) => item.id === movie.id);

      if (foundMovie) {
        return prevMovies;
      }

      return [...prevMovies, movie];
    });
  }, []);

  const updateMovie = useCallback((updatedMovie) => {
    setMovies((prevMovies) =>
        prevMovies.map((movie) =>
            movie.id === updatedMovie.id ? updatedMovie : movie
        )
    );
  }, []);

  const removeMovie = useCallback((id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }, []);

  const isAdded = useCallback(
      (id) => {
        const foundMovie = movies.find((movie) => movie.id === id);
        return foundMovie !== undefined;
      },
      [movies]
  );

  return (
      <BrowserRouter>
        <div
            className="min-h-screen bg-cover bg-center bg-fixed text-slate-900"
            style={{
              backgroundImage:
                  "linear-gradient(rgba(200, 249, 255, 0.85), rgba(240, 249, 255, 0.85)), url('https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg')",
            }}
        >
          <Nav />

          <main className="mx-auto max-w-6xl px-5 py-10">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/watchlist" element={<MyWatchlist movies={movies} removeMovie={removeMovie} />}/>

              <Route path="/add" element={<AddMovie addMovie={addMovie} />} />

              <Route path="/edit/:id" element={<EditMovie movies={movies} updateMovie={updateMovie} />}/>

              <Route path="/movies/:id" element={<MovieDetails movies={movies} removeMovie={removeMovie} />}/>

              <Route path="/explore" element={<Explore addMovie={addMovie} isAdded={isAdded} />}/>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;