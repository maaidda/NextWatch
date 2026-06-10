import { Link } from "react-router";

function Home() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center">
            <div className="max-w-3xl rounded-3xl bg-white p-10 text-center shadow-2xl shadow-sky-200">
                <p className="mb-3 font-bold uppercase tracking-[0.3em] text-sky-600">
                    Movie Watchlist
                </p>

                <h1 className="text-5xl font-extrabold text-sky-950 sm:text-5xl">
                    Welcome to <span className="text-sky-700">NextWatch</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-800">
                    Add your own movies, view your watchlist, edit movie details, remove movies and explore more titles from a real API.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        to="/watchlist"
                        className="rounded-full bg-sky-700 px-8 py-4 font-bold text-white shadow-lg shadow-sky-200 hover:bg-sky-800"
                    >
                        View My Watchlist
                    </Link>

                    <Link
                        to="/add"
                        className="rounded-full bg-white px-8 py-4 font-bold text-sky-800 shadow-lg ring-2 ring-sky-200 hover:bg-sky-50"
                    >
                        Add Movie
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;