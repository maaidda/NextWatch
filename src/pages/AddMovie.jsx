import { useState } from "react";
import { useNavigate } from "react-router";

function AddMovie({ addMovie }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        year: "",
        genre: "",
        image: "",
        description: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newMovie = {
            id: Date.now().toString(),
            title: formData.title,
            year: formData.year,
            genre: formData.genre,
            image: formData.image,
            description: formData.description,
            source: "manual",
        };

        addMovie(newMovie);
        navigate("/watchlist");
    }

    return (
        <section className="mx-auto max-w-2xl">
            <div className="mb-8">

                <h1 className="mt-2 text-4xl font-extrabold text-sky-950">
                    Add New Movie
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
                    placeholder="Movie title"
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <input
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="Year"
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <input
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    placeholder="Genre"
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Description"
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700"
                />

                <button
                    type="submit"
                    className="w-full rounded-xl bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-800"
                >
                    Add Movie
                </button>
            </form>
        </section>
    );
}

export default AddMovie;