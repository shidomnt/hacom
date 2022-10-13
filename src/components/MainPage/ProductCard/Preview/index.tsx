import { Col, Row, Space, Typography } from 'antd';
import styled from 'styled-components';
import { Product } from '../../../../interfaces';
import { formatNumberPriceToString } from '../../../../utils';

const Wrapper = styled.div`
  & {
    background-color: white;
    border: 1px solid var(--primary-color);
    padding: 1px;
    border-radius: 10px;
    max-height: 100vh;
    overflow: hidden;
    position: absolute;
    z-index: 99999;
  }
`;

const StyledHeader = styled.div`
  & {
    padding: 12px 40px 12px 8px;
    color: white;
    border-radius: inherit;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
    font-weight: 700;
    background-image: linear-gradient(90deg, var(--primary-color), #ed1b24);
  }
`;

const StyledLabel = styled.div`
  & {
    background-color: var(--primary-color);
    padding: 2px 12px;
    color: white;
    display: inline-block;
    border-radius: 4px;
  }
`;

interface PreviewProps {
  product: Product;
}

export default function Preview({ product }: PreviewProps) {
  let infos = [];
  if (product.maxPrice) {
    infos.push({
      label: 'Giá bán',
      value: `${formatNumberPriceToString(product.maxPrice)}₫ ${
        product.vat ? '[Đã bao gồm VAT]' : ''
      }`,
    });
  }
  infos = [
    ...infos,
    {
      label: 'Giá thấp nhất',
      value: (
        <Typography.Title style={{ color: '#ed1b24', margin: 0 }} level={5}>
          {formatNumberPriceToString(product.price)}₫
        </Typography.Title>
      ),
    },
    {
      label: 'Bảo hành',
      value: `${product.baohanh}`,
    },
  ];
  return (
    <Wrapper>
      <StyledHeader>{product.name}</StyledHeader>
      <Space style={{ width: '100%', padding: '8px' }} direction="vertical">
        <div>
          {infos.map((item) => (
            <Row key={item.label}>
              <Col span={7}>- {item.label}:</Col>
              <Col span={17}>{item.value}</Col>
            </Row>
          ))}
        </div>
        {!!product.tssp.filter((v) => !!v.trim()).length && (
          <div>
            <StyledLabel>
              <Space direction="horizontal">
                <i className="fa-solid fa-layer-group"></i>
                Thông số sản phẩm
              </Space>
            </StyledLabel>
            <div>
              {product.tssp.slice(0, 4).map((thongso) => (
                <div key={thongso}>
                  <Typography.Text>- {thongso}</Typography.Text>
                </div>
              ))}
            </div>
          </div>
        )}
        <StyledLabel>
          <Space direction="horizontal">
            <i className="fa-solid fa-gift"></i>
            Chương trình khuyến mại
          </Space>
        </StyledLabel>
        <div>
          {product.uudai.slice(1, 8).map((chitietuudai, index) => {
            if (chitietuudai[0] !== '+') {
              return (
                <Typography.Title
                  key={`${product.id}-${index}`}
                  style={{ color: '#ed1b24' }}
                  level={5}
                >
                  {chitietuudai}
                </Typography.Title>
              );
            }
            return <div key={`${product.id}-${index}`}>{chitietuudai}</div>;
          })}
        </div>
      </Space>
    </Wrapper>
  );
}
