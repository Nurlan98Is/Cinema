import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const loadFromLocalStorage = (): boolean => {
  try {
    const auth = localStorage.getItem('auth');
    return auth ? JSON.parse(auth) : false;
  } catch {
    return false;
  }
};

const initialState: AuthState = {
  auth: loadFromLocalStorage(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<boolean>) => {
      console.log('Setting auth state to:', action);
      state.auth = action.payload;
      localStorage.setItem('auth', JSON.stringify(action.payload));
    },
    signOut: (state) => {
      state.auth = false;
      localStorage.removeItem('auth');
      localStorage.removeItem('user');
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
