import { configureStore } from "@reduxjs/toolkit";
import conditionSlice from "./conditionSlice";
import navSlice from "./navSlice";

const store = configureStore({
    reducer:{
        condition:conditionSlice,
        nav:navSlice
    },
    
});

export default store; 