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
} from './cart.styles';
import productImg from '../../assets/imgs/product img.png';
import IncrementSwitch from '../../components/IncrementSwitch/increment-switch';
import Trash from '../../assets/svgs/trash';
import { useMobile } from '../../hooks/useMobile';

const Cart = () => {
  const isMobile = useMobile();
  return (
    <CartWrapper>
      <CartHeading>Cart</CartHeading>
      <div>
        <CartBox>
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
          <CartRemoveButton>
            <Trash />
            <span>Remove</span>
          </CartRemoveButton>
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
