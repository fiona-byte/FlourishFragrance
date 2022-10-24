import { useState } from 'react';
import {
  ProductDescription,
  ProductDetailsGroup,
  ProductDetailsContainer,
  ProductsDetailsWrapper,
  ProductDetailsImage,
  ProductName,
  ProductPrice,
  ReviewsText,
  FilledBtn,
  OutlinedBtn,
  ProductDetailsBtnContainer,
  ProductImage,
  ProductDetailsImageBox,
  Ratings,
  ProductDetailsBox,
} from './product-details.styles';
import productImg from '../../assets/imgs/product img.png';
import Heart from '../../assets/svgs/heart';
import IncrementSwitch from '../../components/IncrementSwitch/increment-switch';

const ProductDetails = () => {
  const [value, setValue] = useState<number | null>(2);
  return (
    <ProductDetailsContainer>
      <ProductsDetailsWrapper>
        <ProductDetailsBox>
          <ProductImage src={productImg} alt='product' />
          <ProductDetailsImageBox>
            <ProductDetailsImage src={productImg} alt='product' />
            <ProductDetailsImage src={productImg} alt='product' />
            <ProductDetailsImage src={productImg} alt='product' />
            <ProductDetailsImage src={productImg} alt='product' />
          </ProductDetailsImageBox>
        </ProductDetailsBox>
        <div>
          <ProductDetailsGroup>
            <ProductName>Victoria Secret Bombshell</ProductName>
            <Heart />
          </ProductDetailsGroup>
          <ProductDetailsGroup style={{ marginTop: '1.2rem' }}>
            <Ratings
              name='simple-controlled'
              value={value}
              onChange={(e, newValue) => {
                setValue(newValue);
              }}
            />
            <ReviewsText>13 Reviews</ReviewsText>
          </ProductDetailsGroup>
          <ProductDescription>
            If you want to feel bougee, confident and bold without breaking the bank, then this is the perfume for you.
            It is a fruity-floral scent with a blend of citrus, Brazilian purple passion fruit, Madagascan vanilla
            orchid, and Italian pine
          </ProductDescription>
          <ProductDetailsGroup>
            <ProductPrice>₦30,000</ProductPrice>
            <IncrementSwitch />
          </ProductDetailsGroup>
          <ProductDetailsBtnContainer>
            <OutlinedBtn>Add to Cart</OutlinedBtn>
            <FilledBtn>Buy Now</FilledBtn>
          </ProductDetailsBtnContainer>
        </div>
      </ProductsDetailsWrapper>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
