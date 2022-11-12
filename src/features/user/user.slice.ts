import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { getProfile, login as loginApi } from '../../api/userApi';
import { AppDispatch, RootState } from '../../app/store';
import { KEY_LOCAL_STORAGE_ACCESS_TOKEN } from '../../constant';
import { LoginUserDto } from '../../interfaces';
import { removeProduct } from '../cart/cart.slice';
import { StatusEnum } from '../interface/statusEnum.interface';
import { UserState } from '../interface/userState.interface';

const initialState: UserState = {
  data: null,
  status: StatusEnum.idle,
};

const login = async (loginUserDto: LoginUserDto) => {
  const hide = message.loading('Action in progress..', 0);
  try {
    const response = await loginApi(loginUserDto);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    localStorage.setItem(
      KEY_LOCAL_STORAGE_ACCESS_TOKEN,
      response.data.accessToken
    );
    hide();
    message.success('Dang nhap thanh cong!');
  } catch (error) {
    if (error instanceof Error) {
      hide();
      message.error(error.message);
    }
  }
};

const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (
    handlers: { onFinish: (userStatus: StatusEnum) => any } | undefined,
    { getState }
  ) => {
    try {
      const responseGetProfile = await getProfile();
      if (!responseGetProfile.data.success) {
        throw new Error('Loi khi get profile');
      }
      if (handlers) {
        setTimeout(() => {
          handlers.onFinish((getState() as RootState).user.status);
        }, 0);
      }
      return responseGetProfile.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    clearUser: (state) => {
      state.data = null;
      state.status = StatusEnum.idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = StatusEnum.pending;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = StatusEnum.fulfilled;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = StatusEnum.rejected;
        state.data = null;
      });
  },
});

const logout = () => (dispatch: AppDispatch) => {
  localStorage.setItem(KEY_LOCAL_STORAGE_ACCESS_TOKEN, '');
  dispatch(removeProduct({ productIds: 'all' }));
  dispatch(clearUser());
};

export const userSelector = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;

export const { clearUser } = userSlice.actions;

export { fetchUser, login, logout };
