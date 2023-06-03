import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    displayedPage: ""
  },
  reducers: {
    changePage(state, action: PayloadAction<string>) {
        state.displayedPage += action.payload
      },
  }
})

export const { changePage} = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(changePage("AboutME"))
