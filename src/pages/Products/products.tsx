import { ProductsHeader, ProductsContainer, ProductsLink } from './products.styles';
import DoubleCaret from '../../assets/svgs/doubleCaret';
import ProductCard from '../../components/ProductCard/card';
import productImg from '../../assets/imgs/product img.png';

const Products = () => {
  return (
    <section id='products'>
      <ProductsHeader>
        <h2 className='heading' style={{ marginBottom: '0' }}>
          Our Products
        </h2>
        <ProductsLink to='/products'>
          View more &nbsp; <DoubleCaret />
        </ProductsLink>
      </ProductsHeader>
      <ProductsContainer>
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
      </ProductsContainer>
    </section>
  );
};

export default Products;
