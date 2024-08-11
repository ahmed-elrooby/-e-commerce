import toast from "react-hot-toast";

const { createSlice, isAsyncThunkAction } = require("@reduxjs/toolkit");

const whishSlice = createSlice({
    name:"whish",
    initialState:{
        allProducts:JSON.parse(localStorage.getItem('whish')) || [],

    },
    reducers:{
        addtoWhish: (state, action) => {
            const product = state.allProducts.find(item => item.id === action.payload.id);
            if (!product) {
                state.allProducts.push(action.payload);
                localStorage.setItem('whish', JSON.stringify(state.allProducts));
                toast.success("your product add successfully")

            }           
        },
        removeFromWhishList:(state,action)=>{
            state.allProducts = state.allProducts.filter(item => item.id !== action.payload.id)
            localStorage.setItem('whish', JSON.stringify(state.allProducts));        }
    }
})
export default whishSlice.reducer;
export const {addtoWhish,removeFromWhishList} = whishSlice.actions;