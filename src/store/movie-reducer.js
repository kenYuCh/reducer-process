import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movie',
    initialState: { 
        movieList: [],
        totalResults: 0,
        response: false,
        titleText: '',
        pages: 0,
        initpages: 1,
        maxPages: null,
        remain: 0,
    },
    reducers: {
        addToMovie(state, action) { 
            console.log("action: ", action.payload)
            const { Search, totalResults, Response, titleText } = action.payload;
            // console.log("action: ", Search )
            state.movieList = Search;
            state.totalResults = totalResults;
            state.response = Response;
            state.titleText = titleText;
            if(totalResults % 10 == 0) {
                state.pages = Math.floor(totalResults / 10)
                state.remain = 0
            } else {
                state.pages = Math.floor(totalResults / 10) + 1
                state.remain = totalResults % 10
            }
            // state.remain = totalResults % 10 // pythone gjot
            console.log(state.pages, state.remain)

        },
        setMoviePages(state, action) {
            state.maxPages = action.payload;
            
        },
        setMovieTitle(state, action) {
            console.log("setMovieTitle: ", action.payload)
            state.titleText = action.payload;
        }
       
    }
})

// export const cartActions = cartSlice.actions;
export const { addToMovie, setMoviePages, setMovieTitle} = movieSlice.actions;
export default movieSlice;












