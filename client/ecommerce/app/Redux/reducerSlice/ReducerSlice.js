import toast from "react-hot-toast";

const { createSlice } = require("@reduxjs/toolkit");

const cartSlie = createSlice({
    name:"cart",
    initialState:{
        products: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers:{
        addToCart: (state, action) => {
            const product = state.products.find(item => item.id === action.payload.id);
            if (!product) {
                state.products.push(action.payload);
                localStorage.setItem('cart', JSON.stringify(state.products));
                toast.success("your product add successfully")

            }
        }
        ,
        removeFromCart:(state,action)=>{
            state.products = state.products.filter(item => item.id !== action.payload.id)
            localStorage.setItem('cart', JSON.stringify(state.products));


        }
    }
   

    
})
export default cartSlie.reducer;
export const {addToCart,removeFromCart} = cartSlie.actions;