import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  original_title,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div
        className="h-[40vh] w-[180px] scale-100 bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieObj) ? (
          <div
            onClick={() => handleRemoveFromWatchlist(movieObj)}
            className="mx-15 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handleAddtoWatchlist(movieObj)}
            className="mx-15 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          >
            &#128525;
          </div>
        )}

        <div className="absolute bottom-0 text-white text-l w-full p-2 text-center rounded-xl bg-gray-900/40">
          {original_title}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
