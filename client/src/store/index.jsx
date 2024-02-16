import {configureStore} from "@reduxjs/toolkit";
import bookingReducer from "./bookingReducer"

const store = configureStore({
    reducer:{
        data:bookingReducer
    }
})

export default store;

