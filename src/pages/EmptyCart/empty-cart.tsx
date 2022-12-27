import { Link } from 'react-router-dom';
import EmptyCartSvg from '../../assets/svgs/emptyCart';
import { EmptyCartButton, EmptyCartContainer, EmptyCartHeading, EmptyCartSub } from './empty-cart.styles';

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <EmptyCartSvg className='empty-cart__svg' />
      <EmptyCartHeading>Oops</EmptyCartHeading>
      <EmptyCartSub>You do not have any items in your cart, go to products to get started</EmptyCartSub>
      <EmptyCartButton to='/products'>Products</EmptyCartButton>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
