import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: []
    },
    reducers: {
        postContacts: (state,action) => {
            state.contacts = action.payload.data;
        }
    }
})

export const {postContacts} = contactSlice.actions;

export default contactSlice.reducer;