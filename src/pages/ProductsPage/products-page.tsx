import { products } from '../../data';
import ProductCard from '../../components/ProductCard/card';
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
        {products.map(({ id, productName, productPrice, productImage }) => (
          <ProductCard
            key={id}
            id={id}
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
          />
        ))}
      </ProductsWrapper>
      <Pagination />
    </ProductsContainer>
  );
};

export default ProductsPage;
