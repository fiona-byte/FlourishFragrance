import { Link } from 'react-router-dom';
import Heart from '../../assets/svgs/heart';
import {
  Favourite,
  ProductButton,
  ProductImageContainer,
  ProductName,
  ProductPrice,
  ProductsBox,
  ProductsCard,
} from './card.styles';

type ProductDetails = {
  productName: string;
  productPrice: string;
  productImage: string;
};

const ProductCard = ({ productImage, productName, productPrice }: ProductDetails) => {
  return (
    <ProductsCard>
      <Favourite>
        <Heart />
      </Favourite>
      <ProductImageContainer>
        <img
          src={productImage}
          alt='product'
          className='products__img'
          style={{ width: '100%', height: '100%', borderRadius: '8px 8px 0px 0px' }}
        />
      </ProductImageContainer>
      <Link to='/product-details'>
        <ProductsBox>
          <ProductName>{productName}</ProductName>
          <ProductPrice>{productPrice}</ProductPrice>
        </ProductsBox>
      </Link>
      <ProductButton>Add to cart</ProductButton>
    </ProductsCard>
  );
};

export default ProductCard;
