import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { id: "1", name: "Interstellar" },
    { id: "2", name: "Harry Potter" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      [...state, action.payload];
    },
    removeMovie: (state, action) => {},
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
