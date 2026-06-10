const TVMAZE_API = "https://api.tvmaze.com/search/shows";

export function searchShows(query) {
    return fetch(`${TVMAZE_API}?q=${encodeURIComponent(query)}`)
        .then((response) => response.json())
        .then((data) => data.map((item) => item.show));
}