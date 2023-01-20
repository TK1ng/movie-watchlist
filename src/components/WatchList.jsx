import MovieCard from "./MovieCard";

const WatchList = ({watchList, onRemove}) => {
    const movieDisplay = watchList.map( (m, index) => {
        return <MovieCard key={index} movieData={m} onRemoveMovie={onRemove} watchList={watchList} />
    });

    return ( 
        <>
            <h2>Watch List</h2>
            <div className="movieContainer">
                {movieDisplay}
            </div>
        </>

     );
}
 
export default WatchList;