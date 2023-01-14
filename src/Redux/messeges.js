/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://127.0.0.1:3000';

const FETCH = 'http://127.0.0.1:3000/FETCH';

const initialState = {
  greeting: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export const fetchGreeting = createAsyncThunk(FETCH, async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const random = Math.floor(Math.random() * data.length);
  const singleData = data[random];
  return singleData;
});
