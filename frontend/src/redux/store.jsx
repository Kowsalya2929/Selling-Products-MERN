import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './contactSclice.jsx'

const store = configureStore({
    reducer: {
        contacts: contactReducer 
    }
})

export default store;