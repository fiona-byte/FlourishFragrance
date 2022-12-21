import ProductCard from '../../components/ProductCard/card';
import productImg from '../../assets/imgs/product img.png';
import {
  ProductsBox,
  ProductsContainer,
  ProductsFilterContainer,
  ProductsFilterList,
  ProductsSearchContainer,
  ProductsSearchInput,
  ProductsWrapper,
} from './products-page.styles';
import SearchIcon from '../../assets/svgs/search';
import Pagination from '../../components/Pagination/pagination';

const ProductsPage = () => {
  return (
    <ProductsContainer>
      <h2 className='heading'>Our Products</h2>
      <ProductsBox>
        <ProductsSearchContainer>
          <SearchIcon className='search__icon' />
          <ProductsSearchInput type='search' placeholder='Search products' />
        </ProductsSearchContainer>
        <ProductsFilterContainer>
          <ProductsFilterList className='active'>All</ProductsFilterList>
          <ProductsFilterList>Most Popular</ProductsFilterList>
          <ProductsFilterList>Best Sellers</ProductsFilterList>
        </ProductsFilterContainer>
      </ProductsBox>
      <ProductsWrapper>
        <ProductCard productName='Victoria Secret Bombshell' productPrice='₦10,000' productImage={productImg} />
      </ProductsWrapper>
      <Pagination />
    </ProductsContainer>
  );
};

export default ProductsPage;
