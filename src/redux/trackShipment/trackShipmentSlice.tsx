import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const getShipmentStatus = createAsyncThunk(
  'shipments/track/trackingNumber',
  // if you type your function argument here
  async (trackingNumber: string) => {
    const response = await fetch(`https://tracking.bosta.co/shipments/track/${trackingNumber}`,{
      method:"GET"
    })
    const result = response.json()
    return result
  }
)

export interface ShipmentState {
  data: []
  loading: boolean
  error: string | null;
}

const initialState: ShipmentState = {
  data: [],
  loading: false,
  error: null,
}

export const trackShipmentSlice = createSlice({
  name: 'trackShipment',
  initialState,
  reducers: {
  },
  extraReducers:(builder) => {
    builder.addCase(getShipmentStatus.pending,(state,action)=>{
      state.loading = true;
    })  
    builder.addCase(getShipmentStatus.fulfilled,(state,action)=>{
      state.loading = false;
      state.data = action.payload
    })  
    builder.addCase(getShipmentStatus.rejected,(state, action: PayloadAction<any>)=>{
      state.error = action.payload;
    })  
  },
})

// Action creators are generated for each case reducer function
//export const {  } = trackShipmentSlice.actions

export default trackShipmentSlice.reducer