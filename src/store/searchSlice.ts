import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchedText: (_, action: PayloadAction<string>): string => {
      return action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { actions } = searchSlice;
