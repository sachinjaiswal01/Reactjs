// eslint-disable-next-line react/prop-types
export const Card = ({movieData})=> {
    // eslint-disable-next-line react/prop-types
    const {Poster ,imdbID} = movieData
    return (
        <li className="hero-container" >
            <div className="main-character" >
                <div className="poster-container">
                <img src={Poster} className="poster" alt={imdbID} />
                </div>
                <div className="ticket-container">
                    <div className="ticket__content">
                        <a href={`/movie/${imdbID}`}>
                            <button className="ticket__but-btn">
                             Watch now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}