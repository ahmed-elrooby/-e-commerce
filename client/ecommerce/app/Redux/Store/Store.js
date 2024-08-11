import WhishSlice from "../WhishSlice/WhishSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: ReducerSlice } = require("../reducerSlice/ReducerSlice");

const store = configureStore({
    reducer:{
        cart:ReducerSlice,
        whish:WhishSlice
    }
    
})
export default store;