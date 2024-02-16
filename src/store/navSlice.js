import {createSlice} from "@reduxjs/toolkit"
const navSlice = createSlice({
    name:"navSlice",
    initialState:{
        isOpen:true
    },
    reducers:{
        
        openNav:(state, action)=>{
            state.isOpen = true
        },
        closeNav:(state, action)=>{
            state.isOpen = false
            
        },
    }
})

export const {changeCondition} = navSlice.actions;
export default navSlice.reducer;