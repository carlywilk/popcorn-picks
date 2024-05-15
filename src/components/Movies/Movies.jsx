import './Movies.scss';


const imageApi = "https://image.tmdb.org/t/p/w1280";

export default function Movies ({title, poster_path, overview, vote_average}) {

    return (
        <div className='movies'>
        <h1 className='movives__title'>{title}</h1>
        <img src={imageApi + poster_path} alt="movies__thumbnail" className='movies__image'/>
        <span className='movies__rate'>Rate:{vote_average}</span>

        </div>

    )
}