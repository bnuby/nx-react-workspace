import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HistorySliceState = {
    ids: string[];
}

const initialState: HistorySliceState = {
    ids: [],
}

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addHistory: (state, action: PayloadAction<string>) => {
            state.ids.push(action.payload)
        },
        setHistories: (state, action: PayloadAction<string[]>) => {
            state.ids = action.payload;
        },
        clearHistory: state => {
            state.ids = [];
        }
    }
})

export const {
    addHistory,
    setHistories,
    clearHistory
} = historySlice.actions;

export const historyReducer = historySlice.reducer;