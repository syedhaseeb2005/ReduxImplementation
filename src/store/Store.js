import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../Slices/themeReducer'

 const store = configureStore({
    reducer  : {
        theme : themeReducer
    }
})

export default store