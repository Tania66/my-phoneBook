import { createSelector } from '@reduxjs/toolkit';

export const getContact = state => state.contacts.items;

export const selectedFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterContact = createSelector(
  [getContact, selectedFilter],
  (items, filter) =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
