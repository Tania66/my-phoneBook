import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contacts/contactSlice';
import { filterSlice } from './contacts/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice.reducer,
  },
});

export default store;
