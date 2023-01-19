import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import './App.css';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${process.env.API_KEY}`)
  };

  useEffect(() => {

  }, []);



  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
