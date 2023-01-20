import MovieCard from './MovieCard';
import styles from './WatchList.module.css';

const WatchList = ({watchList, onRemove}) => {
    const movieDisplay = !watchList.length ? 'No movies have been added to watch list' : watchList.map(m => {
        return <MovieCard key={m.id} movieData={m} onRemoveMovie={onRemove} watchList={watchList} />
    });

    return ( 
        <div className={styles.watchListPanel}>
            <h2>Watch List</h2>
            <div className={styles.listContainer}>
                {movieDisplay}
            </div>
        </div>

     );
}
 
export default WatchList;