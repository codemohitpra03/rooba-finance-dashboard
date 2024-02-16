import {createSlice} from "@reduxjs/toolkit"
const conditionSlice = createSlice({
    name:"conditionSlice",
    initialState:{
        condition:{
            "zero":"incomplete",
            "one":"disabled",
            "two":"disabled",
            "three":"disabled",
        }
    },
    reducers:{
        changeCondition: (state, action)=>{
            console.log(state);
            console.log(action.payload);
            state.condition = action.payload
        },
    }
})

export const {changeCondition} = conditionSlice.actions;
export default conditionSlice.reducer;