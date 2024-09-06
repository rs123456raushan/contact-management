import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
}

interface ContactState {
    contacts: Contact[];
}

const initialState: ContactState = {
    contacts: [],
};

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action: PayloadAction<number>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        editContact: (state, action: PayloadAction<Contact>) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
            if (index >= 0) state.contacts[index] = action.payload;
        },
    },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;
