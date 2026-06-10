import { Link } from "react-router";

function MovieCard({
                       movie,
                       removeMovie,
                       showEdit = true,
                       showRemove = true,
                       showAdd = false,
                       addMovie,
                       isAdded,
                   }) {
    const added = isAdded ? isAdded(movie.id) : true;

    return (
        <div className="overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-lg shadow-sky-200 transition hover:-translate-y-1 hover:shadow-xl">
            <img
                src={movie.image || "https://placehold.co/300x420?text=No+Image"}
                alt={movie.title}
                className="h-80 w-full object-cover"
            />

            <div className="p-5">
                <h3 className="text-lg font-bold text-sky-950">{movie.title}</h3>

                <p className="mt-1 text-sm font-medium text-sky-700">
                    {movie.year || "Unknown year"}
                </p>

                <p className="mt-2 text-sm text-sky-500">
                    {movie.genre || "No genre"}
                </p>

                <div className="mt-4 flex gap-2">
                    <Link to={`/movies/${movie.id}`} className="flex-1 rounded-xl bg-sky-950 px-3 py-2 text-center text-sm font-bold text-white hover:bg-sky-900">
                        View More
                    </Link>
                </div>

                <div className="mt-3 flex gap-2">
                    {showEdit && (
                        <Link to={`/edit/${movie.id}`} className="flex-1 rounded-xl bg-sky-700 px-3 py-2 text-center text-sm font-bold text-white hover:bg-sky-800">
                            Edit
                        </Link>
                    )}

                    {showRemove && (
                        <button onClick={() => removeMovie(movie.id)} className="flex-1 rounded-xl bg-sky-500 px-3 py-2 text-sm font-bold text-white hover:bg-sky-600">
                            Remove
                        </button>
                    )}

                    {showAdd && (
                        <button
                            disabled={added}
                            onClick={() => addMovie(movie)}
                            className={
                                added
                                    ? "w-full rounded-xl bg-sky-100 px-3 py-2 text-sm font-bold text-sky-700"
                                    : "w-full rounded-xl bg-sky-700 px-3 py-2 text-sm font-bold text-white hover:bg-sky-800"
                            }>
                            {added ? "Added" : "Add to My List"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;