import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
       counter: exampleReducer
    }
})