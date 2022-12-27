import { Link } from 'react-router-dom';
import Heart from '../../assets/svgs/heart';
import {
  Favourite,
  ProductButton,
  ProductImageContainer,
  ProductName,
  ProductPrice,
  ProductBox,
  ProductWrapper,
  ProductDetailsWrapper,
} from './card.styles';

type ProductDetails = {
  id: number;
  productName: string;
  productPrice: string;
  productImage: string;
};

const ProductCard = ({ id, productImage, productName, productPrice }: ProductDetails) => {
  return (
    <ProductWrapper>
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
      <ProductDetailsWrapper>
        <Link to={`/product-details/${id}`}>
          <ProductBox>
            <ProductName>{productName}</ProductName>
            <ProductPrice>{productPrice}</ProductPrice>
          </ProductBox>
        </Link>
        <ProductButton>Add to cart</ProductButton>
      </ProductDetailsWrapper>
    </ProductWrapper>
  );
};

export default ProductCard;
