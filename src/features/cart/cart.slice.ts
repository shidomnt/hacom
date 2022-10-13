import {
  AnyAction,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { message } from 'antd';
import { getCart } from '../../api/cartApi';
import { RootState } from '../../app/store';
import { CartItemType, DiscountInfo } from '../../interfaces';
import {
  ChangeQuantifyPayload,
  RemoveCartItemPayload,
} from '../interface/cartActionPayload.interface';
import { CartState } from '../interface/cartState.interface';
import { StatusEnum } from '../interface/statusEnum.interface';

const cartEntityAdapter = createEntityAdapter<CartItemType>({
  selectId: (item) => item.product.id,
});

const initialState = cartEntityAdapter.getInitialState<CartState>({
  status: StatusEnum.idle,
  discountInfo: null,
});

const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { dispatch, getState }) => {
    try {
      const response = await getCart();
      if (!response.data.success) {
        throw new Error('Loi khi get cart');
      }
      setTimeout(() => {
        const { cart } = getState() as RootState;
        if (cart.status === StatusEnum.fulfilled) {
          dispatch(appendProducts(response.data.data));
        }
      }, 0);
      return response.data.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setDiscountInfo: (state, action: PayloadAction<DiscountInfo | null>) => {
      const { payload } = action;
      state.discountInfo = payload;
    },
    addProduct: (state, action: PayloadAction<CartItemType>) => {
      cartEntityAdapter.upsertOne(state, action);
    },
    appendProducts: (state, action: PayloadAction<CartItemType[]>) => {
      cartEntityAdapter.upsertMany(state, action);
    },
    changeQuantify: (state, action: PayloadAction<ChangeQuantifyPayload>) => {
      const {
        payload: { productId, newQuantify },
      } = action;
      if (state.ids.includes(productId)) {
        const entity = state.entities[productId]!;
        entity.quantify = newQuantify;
      }
    },
    removeProduct: (state, action: PayloadAction<RemoveCartItemPayload>) => {
      const {
        payload: { productIds },
      } = action;
      if (productIds === 'all') {
        cartEntityAdapter.removeAll(state);
      } else {
        cartEntityAdapter.removeMany(state, productIds);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = StatusEnum.pending;
      })
      .addCase(fetchCart.fulfilled, (state) => {
        state.status = StatusEnum.fulfilled;
      });
  },
});

const addProduct =
  (payload: CartItemType): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    dispatch(cartSlice.actions.addProduct(payload));
    message.success({
      content: 'Thêm vào giỏ hàng thành công!',
      className: 'custom-message',
    });
  };

export const { selectAll: selectAllCartItem } =
  cartEntityAdapter.getSelectors();

export const discountInfoSelector = (state: RootState) =>
  state.cart.discountInfo;

export const {
  appendProducts,
  changeQuantify,
  removeProduct,
  setDiscountInfo,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export { fetchCart, addProduct };
