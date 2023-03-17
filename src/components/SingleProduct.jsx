import { Link, useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);
    const { image, name } = product;

  return (
    <section className='section product'>
          
          <h2>{ name}</h2>
          <img src={image} alt="" />
         
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;