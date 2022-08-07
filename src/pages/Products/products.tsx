import ProductCard from '../../components/ProductCard/card';
import productImg from '../../assets/imgs/product img.png';
import { ProductsContainer, ProductText } from './products.styles';

const Products = () => {
  return (
    <section id='products'>
      <h2 className='heading'>Our Products</h2>
      {/* <ProductText>View more</ProductText> */}
      <ProductsContainer>
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
      </ProductsContainer>
    </section>
  );
};

export default Products;
