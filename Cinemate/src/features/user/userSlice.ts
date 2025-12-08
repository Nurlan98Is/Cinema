import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
  firstName: '',
  lastName: '',
  email: '',
  nickName: '',
  phoneNumber: '',
  friends: [],
  favoriteMovies: [],
  favoriteSeries: [],
};

const loadFromLocalStorage = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : initialUser;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState: loadFromLocalStorage(),
  reducers: {
    setUser: (state, action) => {
      const user = Object.assign(state, action.payload);
      localStorage.setItem('user', JSON.stringify(user));
      console.log(action);
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
