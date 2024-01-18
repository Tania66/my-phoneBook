import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deletedContact } from './options';
import { logout } from '../auth/authOperation';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deletedContact.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(deletedContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const contactId = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(contactId, 1);
      })

      .addCase(deletedContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const contactReducer = contactSlice.reducer;
