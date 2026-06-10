import { Link } from "react-router";
import MovieCard from "../components/MovieCard.jsx";

function MyWatchlist({ movies, removeMovie }) {
    return (
        <section>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="font-bold uppercase tracking-[0.25em] text-sky-600">
                        Saved Movies
                    </p>

                    <h1 className="mt-2 text-4xl font-extrabold text-sky-950">
                        My Watchlist
                    </h1>

                    <p className="mt-3 max-w-2xl text-sky-700">
                        View, edit or remove the movies you added.
                    </p>
                </div>

                <Link to="/add" className="rounded-full bg-sky-700 px-6 py-3 text-center font-bold text-white shadow-lg shadow-sky-200 hover:bg-sky-800">
                    Add More Movies
                </Link>
            </div>

            {movies.length === 0 ? (
                <div className="rounded-3xl bg-white p-8 text-center shadow-xl shadow-sky-200">
                    <p className="text-lg text-sky-700">
                        Your watchlist is empty. Add your first movie.
                    </p>

                    <Link to="/add" className="mt-5 inline-block rounded-full bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-800">
                        Add Movie
                    </Link>
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            removeMovie={removeMovie}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default MyWatchlist;