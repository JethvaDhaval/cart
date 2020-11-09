import React,{useState} from 'react';

import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] =  useState([]);
  const [page, setPage] =  useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      name: 'Masala Masti',
      cost: '10',
      image: 'https://tse3.mm.bing.net/th?id=OIP.tAY-YVGKOku7WDboQwctDAHaHa&pid=Api&P=0&w=300&h=300'
    },
    {
      name: 'Simply Salted',
      cost: '10',
      image: 'https://tse2.mm.bing.net/th?id=OIP.3l0Uy_E70e5T03ZPaK95KAHaHa&pid=Api&P=0&w=300&h=300'
    
    },
    {
      name: 'Tomato Twist',
      cost: '10',
      image: 'https://tse4.mm.bing.net/th?id=OIP.MkcPoYy172Nwb3RQAXTRvAHaKL&pid=Api&P=0&w=300&h=300'
    
    },
    {
      name: 'Masala Shing',
      cost: '10',
      image: 'https://tse4.mm.bing.net/th?id=OIP.dZ31xBHNk5swxIHpaYOa-gDXEi&pid=Api&P=0&w=300&h=300'
    },
    {
      name: 'Pizzy',
      cost: '10',
      image: 'https://tse3.mm.bing.net/th?id=OIP.-qoIlNUebXHCai4g0V3CdwHaJ4&pid=Api&P=0&w=300&h=300'
    }
  ])

  const addToCart = (product) => {
    setCart([...cart, {...product}]);
  }

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove))
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderProducts = () => (
    <>
    <h1>Products</h1>
    <div className="products">
    {products.map((product, index) => (
       <div className="product" key={index}>
       <h3>{product.name}</h3>
    <h4>{product.cost}&#8377;</h4>
       <img src={product.image} alt={product.name}  />
       <button onClick={() => addToCart(product)}>Add to Cart</button>
     </div>
    ))}
   </div>
   </>
  );

  const renderCart =() => (
    <>
    <h1>Cart</h1>
    <div className="products">
    {cart.map((product, index) => (
       <div className="product" key={index}>
       <h3>{product.name}</h3>
    <h4>{product.cost}&#8377;</h4>
       <img src={product.image} alt={product.name}  />
       <button onClick={() => removeFromCart(product)}>Remove</button>
     </div>
    ))}
   </div>
   </>
  );

  return (
    <div className="App">
      <header>
  <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
  <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page ===  PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
