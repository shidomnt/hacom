import { Grid } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { CartActionContext } from '../../../../contexts/CartProvider';
import {
  CartActionContextInterface,
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
  const { changeQuantify } = useContext(
    CartActionContext
  ) as CartActionContextInterface;
  const [quantify, setQuantify] = useState(item.quantify);

  useEffect(() => {
    if (!quantify) {
      setQuantify(1);
    }
  }, [quantify]);

  useEffect(() => {
    if (quantify && quantify !== item.quantify) {
      changeQuantify(item.product.id, quantify);
    }
  }, [quantify, changeQuantify, item.product.id, item.quantify]);

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
