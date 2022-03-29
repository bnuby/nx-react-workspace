import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { placeholderReducer } from '../slices/placeholderSlice';

export const rootStore = configureStore({
    reducer: {
        placeholder: placeholderReducer
    }
});

export type AppDispatch = typeof rootStore.dispatch;
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppThunk<ReturnType = any> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
