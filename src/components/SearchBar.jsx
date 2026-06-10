import { useEffect, useRef, useState } from "react";

function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        if (searchText.trim() === "") {
            return;
        }
        onSearch(searchText);
    }

    return (
        <form onSubmit={handleSubmit}
              className="mb-6 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-sky-200 sm:flex-row">

            <input
                ref={inputRef}
                type="text"
                placeholder="Search movies or shows..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                className="flex-1 rounded-xl border border-sky-200 px-4 py-3 outline-none focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
            />

            <button type="submit"
                    className="rounded-xl bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-800">
                Search
            </button>
        </form>
    );
}

export default SearchBar;