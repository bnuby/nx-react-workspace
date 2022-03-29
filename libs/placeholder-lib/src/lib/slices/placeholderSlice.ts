import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceholderDataType } from '../types';

export type PlaceholderSliceState = {
    data: PlaceholderDataType | null;
};

const initialState: PlaceholderSliceState = {
    data: null
};

const placeholderSlice = createSlice({
    name: 'placeholderSlice',
    initialState,
    reducers: {
        setItem: (state, data: PayloadAction<PlaceholderDataType>) => {
            state.data = data.payload;
        },
        clearItem: (state) => {
            state.data = null;
        },
    }
});

export const {
    setItem,
    clearItem
} = placeholderSlice.actions;

export const placeholderReducer = placeholderSlice.reducer;