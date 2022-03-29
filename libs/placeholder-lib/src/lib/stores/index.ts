import { configureStore, ThunkAction, Action, createListenerMiddleware, ListenerMiddlewareInstance } from '@reduxjs/toolkit';
import { placeholderReducer } from '../slices/placeholderSlice';
import { historyReducer } from '../slices/historySlice';

const reducer = {
    placeholder: placeholderReducer,
    history: historyReducer
};



const listenerMiddleware = createListenerMiddleware();

export const rootStore = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});


export type AppDispatch = typeof rootStore.dispatch;
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppThunk<ReturnType = any> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;


type AppListenerMiddlewareType = ListenerMiddlewareInstance<RootState, AppDispatch>

const appListenerMiddleware = listenerMiddleware as AppListenerMiddlewareType;
export const clearAppListeners = appListenerMiddleware.clearListeners
export const startAppListening = appListenerMiddleware.startListening
export const stopAppListening = appListenerMiddleware.stopListening