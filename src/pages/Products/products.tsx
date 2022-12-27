import { products } from '../../data';
import { ProductsHeader, ProductsContainer, ProductsLink } from './products.styles';
import DoubleCaret from '../../assets/svgs/doubleCaret';
import ProductCard from '../../components/ProductCard/card';

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
        {products.slice(0, 4).map(({ id, productName, productPrice, productImage }) => (
          <ProductCard
            key={id}
            id={id}
            productImage={productImage}
            productName={productName}
            productPrice={productPrice}
          />
        ))}
      </ProductsContainer>
    </section>
  );
};

export default Products;
