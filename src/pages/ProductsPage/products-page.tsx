import ProductCard from '../../components/ProductCard/card';
import productImg from '../../assets/imgs/product img.png';
import {
  ProductsContainer,
  ProductsSearchContainer,
  ProductsSearchInput,
  ProductsWrapper,
} from './products-page.styles';
import SearchIcon from '../../assets/svgs/search';

const ProductsPage = () => {
  return (
    <ProductsContainer>
      <h2 className='heading'>Our Products</h2>
      <ProductsSearchContainer>
        <SearchIcon className='search__icon' />
        <ProductsSearchInput type='search' placeholder='Search products' />
      </ProductsSearchContainer>
      <ProductsWrapper>
        <ProductCard productName='Victoria Secret Bombshell' productPrice='₦10,000' productImage={productImg} />
        <ProductCard productName='Victoria Secret Bombshell' productPrice='₦20,000' productImage={productImg} />
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default ProductsPage;
