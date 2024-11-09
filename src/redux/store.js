import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import campersReducer from '../redux/campers/slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, campersReducer);

export const store = configureStore({
    reducer: {
        campers: persistedReducer,
    }
});

export const persistor = persistStore(store);