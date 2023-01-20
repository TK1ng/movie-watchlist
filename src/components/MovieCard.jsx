import { useMemo } from 'react';
import styles from './MovieCard.module.css';


const MovieCard = ({ onAddMovie, onRemoveMovie, movieData, watchList}) => {
    const inWatchList = useMemo(() => watchList.filter(item => item.id === movieData.id), [watchList, movieData]);

    const button = inWatchList.length === 0 ? <button onClick={() => handleAddMovie(movieData)}>Add to list</button> : <button onClick={() => handleRemove(movieData)}>Remove from list</button>;

    const handleAddMovie = (movie) => {
        onAddMovie(movie);
    }

    const handleRemove = (movie) => {
        onRemoveMovie(movie);
    }

    return ( 
        <div className={styles.card}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt={`${movieData.original_title} movie poster`}/>
                <h3>{movieData.original_title}</h3>
            </div>
            {button}
        </div>
     );
}
 
export default MovieCard;