import { InputNumber } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  & {
    .controller-btn {
      user-select: none;
      cursor: pointer;
    }
    .controller-btn.minus {
      padding: 0 2px;
    }
    .ant-input-number-group-wrapper {
      width: 104px;
    }
  }
`;

/**
 * 
 * @param {Object} props
 * @param {Object} props.onChange
 * @param {Object} props.onClickMinus
 * @param {Object} props.onClickAdd
 * @returns 
 */
export default function InputQuantify({
  onClickMinus,
  onClickAdd,
  ...props
}) {
  return (
    <Wrapper>
      <InputNumber
        {...props}
        addonBefore={
          <div className="controller-btn minus" onClick={onClickMinus}>
            -
          </div>
        }
        addonAfter={
          <div className="controller-btn add" onClick={onClickAdd}>
            +
          </div>
        }
      />
    </Wrapper>
  );
}
