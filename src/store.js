import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movieSlice";
import createSagaMiddleware from "redux-saga";
import movieSaga from "./sagas/movieSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : {
        movies: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(movieSaga);

export default store;