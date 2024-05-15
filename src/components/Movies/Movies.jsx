import './Movies.scss';


const imageApi = "https://image.tmdb.org/t/p/w1280";

export default function Movies ({poster_path, vote_average, overview}) {

    return (
        <div className='movies'>
        <img src={imageApi + poster_path} alt="movies__thumbnail" className='movies__image'/>
        <p className="movies__overview">{overview}</p>
        <span className='movies__rate'>Rate:{vote_average}</span>
        </div>
    )
}