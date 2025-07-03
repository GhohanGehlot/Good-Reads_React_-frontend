import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from 'Redux/slices/authSlice'

export default  configureStore({
    reducer: {
        auth: authSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

