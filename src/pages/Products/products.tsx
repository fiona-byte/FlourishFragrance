import ProductCard from '../../components/ProductCard/card';
import productImg from '../../assets/imgs/product img.png';
import { ProductsContainer } from './products.styles';

const Products = () => {
  return (
    <section id='products'>
      <h2 className='heading'>Our Products</h2>
      <ProductsContainer>
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
      </ProductsContainer>
    </section>
  );
};

export default Products;
