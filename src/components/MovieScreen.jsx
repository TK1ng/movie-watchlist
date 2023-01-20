import MovieCard from './MovieCard';
import styles from './MovieScreen.modules.css'

const MovieList = ({page, setPage, movieList, onAdd, watchList}) => {

    const movieDisplay = movieList.map( m => {
        return <MovieCard key={m.id} movieData={m} onAddMovie={onAdd} watchList={watchList} />
    });

    return ( 
        <div className={styles.page}>
            <h1>Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className={styles.movieContainer}>
                {movieDisplay}
            </div>
        </div>
     );
}
 
export default MovieList;