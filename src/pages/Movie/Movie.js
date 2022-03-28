import './movie.css'
import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import CircularProgress from '@mui/material/CircularProgress';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { fetchAPI1, fetchAPI2} from '../../api/dataApi';
import { addToMovie, setMoviePages, setMovieTitle } from '../../store/movie-reducer';
import MovieList from './MovieList';

function Movie() {
    const movie = useSelector((state) => state.movie); // state to reducer < name: 'cart' >,
    const dispatch = useDispatch();
    const [pages, setPages] = useState(0); 
    const [title, setTitle] = useState(""); // search title
    const [isload, setLoad] = useState(false);
    const previousPage = () => {
        console.log("prePage: ",movie.response)
        if(movie.response){
            setPages(preValue => 
                preValue <= 1 ? 1 : preValue-1
            )
        }else{
            setPages(0)
        }
    }
    const nextPage = () => {
        setPages(preValue => 
            preValue >= movie.pages ? movie.pages : preValue+1
        )
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
        dispatch(setMovieTitle(e.target.value))
    }
    const handleChangePage=(e)=>{
        setPages(Number(e.target.value))
        if(e.target.value > movie.pages){
            setPages(Number(movie.pages))
        }else{
            setPages(Number(e.target.value))
        }
    }
    const handleSearchMovie = async() => {
        await fetchAPI1(title, 1).then(res => {
            if (res.Response === 'True') { 
                dispatch(addToMovie(res))
                setPages(1)
            } else { // Movie not found!
                console.log("false",res.Response)
            }
        })
        setLoad(false)
    }
    useEffect(()=>{
        const fetchData = async () =>{
            setLoad(true)
            await fetchAPI1(title, pages).then(res => {
                if (res.Response === 'True') { 
                    dispatch(addToMovie(res));
                } else { // Movie not found!
                    setPages(0)
                    console.log("Response: ","Movie not found!")
                }
            })
        };
        fetchData().then(()=>{
            setLoad(false)
        })
    },[pages])
    return (
        <div>
            <h4>Movie</h4>
            <div>
                <label>電影名稱：</label>
                <input onChange={(e)=>handleTitle(e)} value={title}/>
                <button onClick={()=>handleSearchMovie()}>搜尋</button>
            </div>
            <div className="movie-control">
                <button onClick={()=>previousPage()}>上一頁</button>
                <div className="movie-switch-pages">
                    <input className="" 
                        onChange={(e)=> handleChangePage(e)} 
                        value={ pages }
                    /> / 
                    <label> {movie.pages}頁</label>
                </div>
                <button onClick={()=>nextPage()}>下一頁</button>
            </div>
            <span>{` 總共: ${movie.totalResults} 部影片`}</span>
            <div className="movie-content">            
                {
                    isload ? <CircularProgress/>:
                    movie.movieList.map((items, index) => <MovieItem key={index} items={items}/>)
                }
            </div>
            
            
        </div>
    )
}

export default Movie