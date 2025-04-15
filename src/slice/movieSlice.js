import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {list : []},
    reducers : {
        setMovies (state , action){
            state.list = action.payload;
        },
        fetchMovies(state){
            return state;
        },
    },
});
export const {setMovies, fetchMovies} = movieSlice.actions;
export default movieSlice.reducer;