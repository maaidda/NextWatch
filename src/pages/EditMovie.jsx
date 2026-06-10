import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

function EditMovie({ movies, updateMovie }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const movieToEdit = movies.find((movie) => movie.id === id);

    const [formData, setFormData] = useState(() => {
        return (
            movieToEdit || {
                title: "",
                year: "",
                genre: "",
                image: "",
                description: "",
            }
        );
    });

    if (!movieToEdit) {
        return (
            <div className="rounded-3xl bg-white p-8 text-center shadow-xl shadow-sky-200">
                <p className="text-lg font-semibold text-sky-950">
                    Movie not found.
                </p>

                <Link
                    to="/watchlist"
                    className="mt-5 inline-block rounded-full bg-sky-700 px-6 py-3 font-bold text-white"
                >
                    Back to Watchlist
                </Link>
            </div>
        );
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        updateMovie(formData);
        navigate("/watchlist");
    }

    return (
        <section className="mx-auto max-w-2xl">
            <div className="mb-8">
                <p className="font-bold uppercase tracking-[0.25em] text-sky-600">
                    Update
                </p>

                <h1 className="mt-2 text-4xl font-extrabold text-sky-950">
                    Edit Movie
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl bg-white p-8 shadow-2xl shadow-sky-200"
            >
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <input
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <input
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <button
                    type="submit"
                    className="w-full rounded-xl bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-800"
                >
                    Save Changes
                </button>
            </form>
        </section>
    );
}

export default EditMovie;