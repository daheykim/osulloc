import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name : 'cart',
  initialState: [
    {id: 'teaset-001', title: 'AA', count : 1 },
    {id: 'teaset-002', title: 'BB', count : 1 }
  ],
  reducers: {
    
  }
})

const {} = cart.actions

export default configureStore({
  reducer: {
    reducer: {
      cart : cart.reducer
    }
  }
})