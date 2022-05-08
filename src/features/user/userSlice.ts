import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UserType } from '../../types/UserType';

type InitialStateType = {
  value: UserType
}

const initialState: InitialStateType = {
  value: {
    uid: "",
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initialState.value
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;