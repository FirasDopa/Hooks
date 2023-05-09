import {useState} from 'react';
import './App.css';
import NavBars from './components/Navbars/NavBars';
import {moviesData} from './components/Data/Data';
import ListMovie from './components/ListMovies/ListMovie';
import FilterMovies from './components/FilterMovies/FilterMovies';
import AddMovie from './components/AddMovie/AddMovie';
import Carousls from './components/Carousels/Carousls';


function App() {


    const [movies, SetMovies] = useState(moviesData)

    const [inputSearch, setInputSearch] = useState("")
    const [rateSearch, setRateSearch] = useState(0)

    console.log(rateSearch)
    const add = (newMovie) => {
        SetMovies([
            ...movies,
            newMovie
        ])
    }


    return (
        <div className="App">
            <NavBars/>
            <Carousls/>
            <FilterMovies inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                rateSearch={rateSearch}
                setRateSearch={setRateSearch}/>
            <AddMovie add={add}/>
            <ListMovie movies={movies}
                inputSearch={inputSearch}
                rateSearch={rateSearch}/>


        </div>
    );
}


export default App;