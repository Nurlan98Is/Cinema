import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/authSlice';
import { userReducer } from '../features/user/userSlice';
import { registrationApi } from '../features/auth/regitration/registrationApi';
import { loginApi } from '../features/auth/login/loginApi';
import { usersApi } from '../features/user/usersApi';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(registrationApi.middleware)
      .concat(loginApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
