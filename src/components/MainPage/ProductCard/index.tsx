import {
  CheckOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Col, Grid, Row, Typography } from 'antd';
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { CartActionContext } from '../../../contexts/CartProvider';
import {
  calculateDiscountRate,
  formatNumberPriceToString,
} from '../../../utils';
import { Category, Product } from '../../../interfaces';
import { StyledCard } from './StyledCard';
import { StyledCartIcon } from './StyledCartIcon';
import { StyledSkuCode } from './StyledSkuCode';
import { DonVi } from './DonVi';
import { Rate } from './Rate';
import Preview from './Preview';
import styled from 'styled-components';
import Modal from '../../Modal';
import { useSwiper } from 'swiper/react';

const PreviewWrapper = styled.div`
  & {
    position: absolute;
    width: 400px;
  }
`;

interface ProductCardProps {
  category: Category['slug'];
  product: Product;
}

export default function ProductCard({ category, product }: ProductCardProps) {
  const cartActionContext = useContext(CartActionContext);
  const [previewPos, setPreviewPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const swiper = useSwiper();
  const { xs } = Grid.useBreakpoint();
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const previewWrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;
    const previewWrapper = previewWrapperRef.current;
    function handleMouseEnter(this: HTMLDivElement) {
      this.addEventListener('mousemove', handleMouseMove);
      this.addEventListener('mouseleave', handleMouseLeave);
    }
    function handleMouseLeave(this: HTMLDivElement) {
      this.removeEventListener('mousemove', handleMouseMove);
      setPreviewPos(null);
    }
    function handleMouseMove(
      this: HTMLDivElement,
      event: HTMLElementEventMap['mousemove']
    ) {
      if (previewWrapper) {
        const clientX = event.clientX;
        const clientY = event.clientY;
        const docEl = document.documentElement;
        setPreviewPos({
          x:
            clientX + previewWrapper.offsetWidth + 100 < docEl.scrollWidth
              ? clientX + 20
              : clientX - 20 - previewWrapper.offsetWidth,
          y: docEl.scrollTop + clientY / 6,
        });
      }
    }
    imgWrapper?.addEventListener('mouseenter', handleMouseEnter);
    return () => {
      imgWrapper?.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    function handleMouseEnter() {
      swiper?.autoplay?.stop();
    }
    function handleMouseLeave() {
      swiper?.autoplay?.start();
    }
    if (swiper) {
      wrapper?.addEventListener('mouseenter', handleMouseEnter);
      wrapper?.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      wrapper?.removeEventListener('mouseenter', handleMouseEnter);
      wrapper?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [swiper]);

  if (!cartActionContext) {
    return null;
  }

  const { addProduct } = cartActionContext;

  function handleClickCartIcon(product: Product) {
    addProduct(product);
  }

  return (
    product && (
      <div ref={wrapperRef}>
        <Modal>
          <PreviewWrapper
            style={
              previewPos
                ? {
                    left: previewPos.x,
                    top: previewPos.y,
                  }
                : { display: 'none' }
            }
            ref={previewWrapperRef}
          >
            <Preview product={product} />
          </PreviewWrapper>
        </Modal>
        <StyledCard
          cover={
            <div ref={imgWrapperRef}>
              <Link to={`/${category}/${product.id}`}>
                <img
                  style={{ width: '100%', aspectRatio: '1 / 1' }}
                  src={product.imgSrc}
                  alt=""
                />
              </Link>
            </div>
          }
          bordered={false}
        >
          <Row>
            <Col span={12}>
              <img
                src={`https://hacom.vn/media/lib/star_${product.rate}.png`}
                alt=""
              />{' '}
              <Rate>({product.rate})</Rate>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <StyledSkuCode>MÃ: {product.id}</StyledSkuCode>
            </Col>
          </Row>
          <div className="titleContainer">
            <Typography.Title
              level={5}
              style={{
                fontSize: '1.2rem',
              }}
              ellipsis={{ rows: xs ? 2 : 3 }}
            >
              <Link
                to={`/${category}/${product.id}`}
                style={{ color: '#333333' }}
              >
                {product.name}
              </Link>
            </Typography.Title>
          </div>
          {!!product.maxPrice && (
            <div>
              <Typography.Text
                delete
                style={{ fontSize: '1.5rem', color: '#666666' }}
              >
                {
                  <span>
                    {formatNumberPriceToString(product.maxPrice)}{' '}
                    <DonVi>₫</DonVi>
                  </span>
                }
              </Typography.Text>{' '}
              {!xs && (
                <Typography.Text
                  style={{ fontSize: '1.2rem', color: '#d82a29' }}
                >
                  {`(Tiết kiệm ${calculateDiscountRate(product)}%)`}
                </Typography.Text>
              )}
            </div>
          )}
          <Typography.Text
            strong
            style={{ fontSize: '2.2rem', fontWeight: 'bold' }}
          >
            {formatNumberPriceToString(product.price)}
            <DonVi>₫</DonVi>
          </Typography.Text>
          <Row align="middle">
            <Col span={12}>
              <Typography.Text
                style={{
                  color: product.stockStatus ? '#2cc067' : '#0074da',
                }}
              >
                {product.stockStatus ? <CheckOutlined /> : <PhoneOutlined />}{' '}
                {product.stockStatus ? 'Còn hàng' : 'Liên hệ'}
              </Typography.Text>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {product.stockStatus && (
                <StyledCartIcon onClick={() => handleClickCartIcon(product)}>
                  <ShoppingCartOutlined />
                </StyledCartIcon>
              )}
            </Col>
          </Row>
        </StyledCard>
      </div>
    )
  );
}
