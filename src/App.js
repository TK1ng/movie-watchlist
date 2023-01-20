import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import WatchList from './components/WatchList';
import MovieScreen from './components/MovieScreen';
import './App.modules.css';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then(res => {
        setMovieList(res.data.results);
      })
  };

  const addMovie = (movie) => {
    setWatchList(() => { return [...watchList, movie] });
  }

  const removeMovie = (movie) => {
    const newState = watchList.filter(m => m.id !== movie.id);
    setWatchList(...newState)
  }


  useEffect(() => {
    getData();
  }, [page]);



  return (
    <div className="App">
      <Header />
      <main>
        <WatchList watchList={watchList} onRemove={removeMovie} />
        <MovieScreen
          page={page}
          onPageUpdate={setPage}
          movieList={movieList}
          watchList={watchList}
          onAdd={addMovie}
        />
      </main>
    </div>
  );
}

export default App;
