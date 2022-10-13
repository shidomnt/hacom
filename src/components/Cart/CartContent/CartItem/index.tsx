import { Grid } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { changeQuantify } from '../../../../features/cart/cart.slice';
import {
  CartItemType,
} from '../../../../interfaces';
import { calculateThanhTien } from '../../../../utils';
import CollapseCartItem from './CollapseCartItem';
import FullyCartItem from './FullyCartItem';

export interface FullyCartItemProps {
  item: CartItemType;
  quantify: CartItemType['quantify'];
  thanhTien: string;
  setQuantify: React.Dispatch<React.SetStateAction<number>>;
}

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const [quantify, setQuantify] = useState(item.quantify);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!quantify) {
      setQuantify(1);
    }
  }, [quantify]);

  useEffect(() => {
    if (quantify && quantify !== item.quantify) {
      dispatch(changeQuantify({
        productId: item.product.id,
        newQuantify: quantify,
      }));
    }
  }, [quantify, dispatch, item.product.id, item.quantify]);

  const thanhTien = calculateThanhTien(item.product.price, item.quantify);

  const { md } = Grid.useBreakpoint();

  const props: FullyCartItemProps = {
    thanhTien,
    quantify,
    item,
    setQuantify,
  };

  return (
    <React.Fragment>
      {md ? <FullyCartItem {...props} /> : <CollapseCartItem {...props} />}
    </React.Fragment>
  );
}
