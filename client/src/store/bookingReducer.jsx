import { createSlice } from "@reduxjs/toolkit";

const initialState = {user_id:null,vehicle_id:null,start_date:null,end_date:null,vehicle:[]};

const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        userSignIn:(state,action)=>{
            state.user_id = action.payload;
        },
        vehicleId:(state,action)=>{
            state.vehicle_id = action.payload
        },
        vehicleReducer:(state,action)=>{
            state.vehicle = action.payload
        },
        startDate:(state,action)=>{
            state.start_date = action.payload;
        },
        endDate:(state,action)=>{
            state.end_date = action.payload;
        },

    }
})

export const{userSignIn,vehicleReducer,vehicleId,startDate,endDate} = bookingSlice.actions
export default bookingSlice.reducer;