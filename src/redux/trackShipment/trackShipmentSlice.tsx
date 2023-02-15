import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const getShipmentStatus = createAsyncThunk(
  "shipments/track/trackingNumber",
  // if you type your function argument here
  async (trackingNumber: string) => {
    const response = await fetch(
      `https://tracking.bosta.co/shipments/track/${trackingNumber}`,
      {
        method: "GET",
      }
    );
    const result = response.json();
    return result;
  }
);

interface Status {
  state: string;
  timestamp: string;
  hub: string;
  reason: string;
}
export interface ShipmentState {
  data?: {
    provider: string;
    TrackingNumber: string;
    PromisedDate: string;
    CurrentStatus: Status;
    TransitEvents: Array<Status>;
    error: string | null;
    status: string | null;
  };
  loadingStatus: string;
  error: string | null;
}

const initialState: ShipmentState = {
  data: {
    provider: "",
    TrackingNumber: "",
    PromisedDate: "",
    CurrentStatus: { state: "", timestamp: "", hub: "", reason: "" },
    TransitEvents: [],
    error: "",
    status: "",
  },
  loadingStatus: "",
  error: null,
};

export const trackShipmentSlice = createSlice({
  name: "trackShipment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShipmentStatus.pending, (state, action) => {
      state.loadingStatus = "pending";
    });
    builder.addCase(getShipmentStatus.fulfilled, (state, action) => {
      state.loadingStatus = "fulfilled";
      state.data = action.payload;
    });
    builder.addCase(
      getShipmentStatus.rejected,
      (state, action: PayloadAction<any>) => {
        state.loadingStatus = "rejected";
        state.error = action.payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
//export const {  } = trackShipmentSlice.actions

export default trackShipmentSlice.reducer;
