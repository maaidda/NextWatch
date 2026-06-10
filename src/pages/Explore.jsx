import { useEffect, useMemo, useState } from "react";
import { searchShows } from "../api/tvmaze.js";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/MovieCard.jsx";

function formatShow(show) {
    return {
        id: String(show.id),
        title: show.name,
        year: show.premiered?.slice(0, 4) || "Unknown",
        genre: show.genres.join(", ") || "No genre",
        image: show.image?.medium || "",
        description:
            show.summary?.replace(/<[^>]+>/g, "") || "No description available.",
        source: "api",
    };
}

function Explore({ addMovie, isAdded }) {
    const [apiMovies, setApiMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("friends");
    const [sortOption, setSortOption] = useState("title");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        setError("");

        searchShows(searchQuery)
            .then((results) => {
                setApiMovies(results.map(formatShow));
            })
            .catch(() => {
                setApiMovies([]);
                setError("Something went wrong.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [searchQuery]);

    const sortedMovies = useMemo(() => {
        const copiedMovies = [...apiMovies];

        if (sortOption === "year") {
            return copiedMovies.sort((a, b) => Number(b.year) - Number(a.year));
        }

        return copiedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }, [apiMovies, sortOption]);

    return (
        <section>
            <div className="mb-8">
                <p className="font-bold uppercase tracking-[0.25em] text-sky-600">
                    Real API
                </p>

                <h1 className="mt-2 text-4xl font-extrabold text-sky-950">
                    Explore More Movies
                </h1>

                <p className="mt-3 max-w-2xl text-sky-700">
                    Search titles from a real public REST API and add them to your
                    watchlist.
                </p>
            </div>

            <SearchBar onSearch={setSearchQuery} />

            <div className="mb-8 flex items-center gap-3">
                <label className="font-semibold text-sky-950">Sort by:</label>

                <select
                    value={sortOption}
                    onChange={(event) => setSortOption(event.target.value)}
                    className="rounded-xl border border-sky-200 bg-white px-4 py-2 outline-none focus:border-sky-700"
                >
                    <option value="title">Title</option>
                    <option value="year">Year</option>
                </select>
            </div>

            {loading && (
                <p className="rounded-2xl bg-white p-5 text-sky-950 shadow">
                    Loading movies...
                </p>
            )}

            {error && (
                <p className="rounded-2xl bg-red-50 p-5 font-semibold text-red-600 shadow">
                    {error}
                </p>
            )}

            {!loading && !error && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {sortedMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            showEdit={false}
                            showRemove={false}
                            showAdd={true}
                            addMovie={addMovie}
                            isAdded={isAdded}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Explore;