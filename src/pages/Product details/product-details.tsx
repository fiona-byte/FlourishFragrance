import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data';
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
import IncrementSwitch from '../../components/IncrementSwitch/increment-switch';
import Heart from '../../assets/svgs/heart';

type ProductProps = {
  id: number;
  productName: string;
  productPrice: string;
  productImage: string;
  productDescription: string;
};

const ProductDetails = () => {
  const [value, setValue] = useState<number | null>(4);
  const [product, setProduct] = useState<ProductProps>();

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    products.find((data) => {
      if (data.id.toString() === id) {
        setProduct(data);
      }
    });
  }, []);

  return (
    <ProductDetailsContainer>
      <ProductsDetailsWrapper>
        <ProductDetailsBox>
          <ProductImage src={product?.productImage} alt='product' />
          <ProductDetailsImageBox>
            <ProductDetailsImage src={product?.productImage} alt='product' />
            <ProductDetailsImage src={product?.productImage} alt='product' />
            <ProductDetailsImage src={product?.productImage} alt='product' />
            <ProductDetailsImage src={product?.productImage} alt='product' />
          </ProductDetailsImageBox>
        </ProductDetailsBox>
        <div>
          <ProductDetailsGroup>
            <ProductName>{product?.productName}</ProductName>
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
          <ProductDescription>{product?.productDescription}</ProductDescription>
          <ProductDetailsGroup>
            <ProductPrice>{product?.productPrice}</ProductPrice>
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
