import { InputNumber } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { MAX_SOLUONG, MIN_SOLUONG } from '../../../constant';

const Wrapper = styled.span`
  & {
    .ant-input-number-group-wrapper {
      width: 104px;
      .ant-input-number-group-addon {
        cursor: pointer;
        padding: 0;
        .controller-btn {
          user-select: none;
          cursor: pointer;
          padding: 4px 11px;
        }
        .controller-btn.minus {
          padding: 4px 13px;
        }
      }
    }
  }
`;

interface InputQuantifyProps {
  onClickMinus: React.MouseEventHandler<HTMLDivElement>;
  onClickAdd: React.MouseEventHandler<HTMLDivElement>;
  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
  controls?: boolean;
}

export default function InputQuantify({
  onClickMinus,
  onClickAdd,
  min = MIN_SOLUONG,
  max = MAX_SOLUONG,
  value,
  onChange,
  controls = false,
}: InputQuantifyProps) {
  return (
    <Wrapper>
      <InputNumber
        max={max}
        min={min}
        value={value}
        onChange={onChange}
        controls={controls}
        defaultValue={1}
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
