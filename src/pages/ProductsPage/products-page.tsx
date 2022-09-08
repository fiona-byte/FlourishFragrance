import ProductCard from '../../components/ProductCard/card';
import productImg from '../../assets/imgs/product img.png';
import { ProductsContainer, ProductText } from './products-page.styles';

const ProductsPage = () => {
  return (
    <div>
      <h2 className='heading'>Our Products</h2>
      <ProductsContainer>
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
        <ProductCard productImage={productImg} productName='Victoria Secret Bombshell' productPrice='₦10,000' />
      </ProductsContainer>
    </div>
  );
};

export default ProductsPage;
