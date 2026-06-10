import { Link, useParams } from "react-router";

function MovieDetails({ movies, removeMovie }) {
    const { id } = useParams();

    const movie = movies.find((item) => item.id === id);

    if (!movie) {
        return (
            <div className="rounded-3xl bg-white p-8 text-center shadow-xl shadow-sky-200">
                <p className="text-lg font-semibold text-sky-950">
                    Movie not found in your watchlist.
                </p>

                <Link to="/watchlist" className="mt-5 inline-block rounded-full bg-sky-700 px-6 py-3 font-bold text-white"
                >
                    Back to Watchlist
                </Link>
            </div>
        );
    }

    return (
        <section>
            <Link
                to="/watchlist"
                className="mb-6 inline-block font-bold text-sky-700 hover:text-sky-800"
            >
                ← Back to Watchlist
            </Link>

            <div className="grid gap-8 rounded-3xl bg-white p-6 shadow-2xl shadow-sky-200 md:grid-cols-[320px_1fr]">
                <img
                    src={movie.image || "https://placehold.co/400x600?text=No+Image"}
                    alt={movie.title}
                    className="w-full rounded-2xl object-cover shadow-lg"
                />

                <div>
                    <p className="font-bold uppercase tracking-[0.25em] text-sky-600">
                        View More
                    </p>

                    <h1 className="mt-2 text-4xl font-extrabold text-sky-950">
                        {movie.title}
                    </h1>

                    <div className="mt-6 space-y-3 text-sky-700">
                        <p>
                            <strong>Year:</strong> {movie.year || "Unknown"}
                        </p>

                        <p>
                            <strong>Genre:</strong> {movie.genre || "No genre"}
                        </p>

                        <p className="leading-7">
                            <strong>Description:</strong>{" "}
                            {movie.description || "No description available."}
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to={`/edit/${movie.id}`}
                            className="rounded-full bg-sky-700 px-8 py-3 font-bold text-white hover:bg-sky-800"
                        >
                            Edit
                        </Link>

                        <button
                            onClick={() => removeMovie(movie.id)}
                            className="rounded-full bg-sky-500 px-8 py-3 font-bold text-white hover:bg-sky-600"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieDetails;