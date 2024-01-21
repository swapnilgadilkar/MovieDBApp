import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loader: {
    actions: [],
    refreshing: [],
  },
  firstLaunch: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearAppData: state => {
      state = initialState;
      return state;
    },
  },
});

export const {clearAppData} = appSlice.reducer;
