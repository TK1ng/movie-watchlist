import MovieCard from './MovieCard';
import styles from './MovieScreen.module.css'

const MovieList = ({page, onPageUpdate, movieList, onAdd, watchList}) => {

    const movieDisplay = movieList.map( m => {
        return <MovieCard key={m.id} movieData={m} onAddMovie={onAdd} watchList={watchList} />
    });

    const isFirstPage = page === 1 ? true : false;
    const isLastPage = page === movieList.length ? true : false;
    
    const decrement = () => {
        onPageUpdate(() => {
            return page -= 1;
        })
    }
    
    const increment = () => {
        onPageUpdate(() => {
            return page += 1;
        })
    }

    return ( 
        <div className={styles.page}>
            <h1>Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className={styles.btnContainer}>
                <button onClick={decrement} disabled={isFirstPage}>&lt; Prev</button>
                <button onClick={increment} disabled={isLastPage}>Next &gt;</button>
            </div>
            <div className={styles.movieContainer}>
                {movieDisplay}
            </div>
        </div>
     );
}
 
export default MovieList;