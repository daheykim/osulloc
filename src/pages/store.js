import { configureStore, createSlice } from "@reduxjs/toolkit";

const detail = createSlice({
  name : 'detail', 
  initialState : {counter : 1},
  reducers: {
    addCount(state, action){
      state.counter += action.payload
    },
    subCount(state, action){
      if (state.counter > 1) {
        state.counter--
      }
    }
  }
})

export const {addCount, subCount} = detail.actions


const cart = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
/*     addCount(state, action) {
      
    }, */
    addItem(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload.id})

      if(index > -1 ) {
        state[index].count++
      } else {
        state.push(action.payload)
      }
    
    }
  }
})

export const {addItem} = cart.actions

export default configureStore({
    reducer: {
      detail : detail.reducer,
      cart : cart.reducer
  }
})