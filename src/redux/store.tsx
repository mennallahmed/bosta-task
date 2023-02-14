import { configureStore } from '@reduxjs/toolkit'
import trackShipmentReducer from "./trackShipment/trackShipmentSlice"

export const store = configureStore({
  reducer: {
    trackShipment: trackShipmentReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch