// @ts-check
import { Grid } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { CartActionContext } from '../../../../contexts/CartProvider';
import { calculateThanhTien } from '../../../../utils';
import CollapseCartItem from './CollapseCartItem';
import FullyCartItem from './FullyCartItem';

/**
 * @typedef {Object} CartItemProps
 * @property {import('../../../../constant').CartItem} item
 */

/**
 *
 * @param {import('react').PropsWithChildren<CartItemProps>} props
 * @returns
 */
export default function CartItem({ item }) {
  const { changeQuantify } = useContext(CartActionContext);
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

  const props = {
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
