import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
