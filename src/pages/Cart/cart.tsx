import {
  CartBox,
  CartRemoveButton,
  CartCard,
  CartContainer,
  CartHeading,
  CartImage,
  CartPrice,
  CartProductInfo,
  CartProductName,
  CartWrapper,
  CartContainerText,
  CartContainerTotal,
  ProductCount,
  CartLink,
  CartButtonContainer,
  CartOutlinedButton,
  CartFilledButton,
  ProductPrice,
  CartControl,
} from './cart.styles';
import { useMobile } from '../../hooks/useMobile';
import productImg from '../../assets/imgs/product img.png';
import IncrementSwitch from '../../components/IncrementSwitch/increment-switch';
import Trash from '../../assets/svgs/trash';

const Cart = () => {
  const isMobile = useMobile();
  return (
    <CartWrapper>
      <CartHeading>Cart</CartHeading>
      <div>
        <CartBox>
          <CartControl>
            <CartCard>
              <div style={{ position: 'relative' }}>
                <CartImage src={productImg} alt='product' />
                <ProductCount>1</ProductCount>
              </div>
              <CartProductInfo>
                <div>
                  <CartProductName>Victora Secret Bombshell</CartProductName>
                  <CartPrice>₦10,000</CartPrice>
                </div>
                <IncrementSwitch />
              </CartProductInfo>
            </CartCard>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: '2.4rem',
              }}
            >
              {!isMobile && <ProductPrice>₦10,000</ProductPrice>}
              <CartRemoveButton>
                <Trash />
                <span>Remove</span>
              </CartRemoveButton>
            </div>
          </CartControl>
        </CartBox>
      </div>
      <CartContainer>
        <CartContainerText>Subtotal:</CartContainerText>
        <CartContainerTotal>₦10,000</CartContainerTotal>
      </CartContainer>
      <CartButtonContainer>
        {isMobile ? (
          <CartLink to='/products'>Continue Shopping</CartLink>
        ) : (
          <CartOutlinedButton to='/products'>Continue shopping</CartOutlinedButton>
        )}
        <CartFilledButton>Checkout</CartFilledButton>
      </CartButtonContainer>
    </CartWrapper>
  );
};

export default Cart;
