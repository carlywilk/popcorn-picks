

export function FavouritesList({ favourites, removeFavourites }) {

    return (
        <>
            <h2 className="favourites__section-title">Favourite Movies</h2>
            {favourites.map((movie, index) => (
                <div className="favourites__movies">
                    <img src="" alt="movie" />
                    <div onClick={() => favourites.removeFavourites}></div>
                </div>
            ))}
        </>
    )
}