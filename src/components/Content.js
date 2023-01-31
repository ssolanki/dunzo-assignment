import React, {useState, useEffect} from 'react'
import Cart from './Cart'
import Product from './Product'
import '../App.css'

export default function Content() {

  // const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);

    useEffect(() => {
        fakeStore();
    }, []);

    const fakeStore = async() => {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        // console.log(response);
        const jsonData = await response.json();
        // console.log(jsonData);
        setData(jsonData);
    }

    useEffect(() => {
      let items = JSON.parse(localStorage.getItem("cartItems"));
      console.log(items);
      if (items !== []) {
        // console.log(items);
        // console.log("useEffect");
        localStorage.setItem("cartItems", JSON.stringify(items));
        // setCartItems(JSON.parse(items));
        setCartItems(items);
      }
    }, []);

  // isme hme pehle jo data h vo fetch karna padega ...
  useEffect(() => {
    // console.log(cartItems !== []);
    // let items = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems !== [])
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: Math.min(5, ProductExist.quantity + 1)} : item)
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1}]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id 
        ? {...ProductExist, quantity: ProductExist.quantity - 1} : item)
      )
    }
  }

  const handleCartClear = () => {
    setCartItems([]);
  }

  const totalPrice = cartItems.reduce(
      (price, item) => price + item.quantity * item.price
  , 0);

  return (
    <div className="my-container">

      {/* product */}
      <div className="float-child-1">
        <div><p style={{color: 'grey'}}><strong> Shopping </strong> - 10 results </p></div>
        <div classsName='product-class'>

          <Product
            data={data}
            cartItems={cartItems} 
            handleAddProduct={handleAddProduct} 
            handleRemoveProduct={handleRemoveProduct} 
          />

        </div>
      </div>
      <div className="float-child-2" style={{padding: '0px'}}>
        <div className="tmpHeader">
          Your Order
        </div>
        <div className="tmpMain">
        <Cart 
            cartItems={cartItems} 
            handleAddProduct={handleAddProduct} 
            handleRemoveProduct={handleRemoveProduct} 
            handleCartClear={handleCartClear}
         />
        </div>
        <div className="tmpFooter">
        { 
            totalPrice > 0 ? 
            <>
              <div className="delivery-fee">
                <div> Delivery fees </div>
                <div> ₹25 </div>
              </div>
              <div className="order-total">
                <div> Order Total </div>
                <div> ₹ {totalPrice.toFixed(2)} </div>
              </div>
              <div className="total-pay">
                <div> To Pay </div>
                <div> ₹{(totalPrice + 25).toFixed(2)} </div>
              </div>
              <div className="proceed-pay">
                <button onClick={handleCartClear}>Proceed to Pay</button>
              </div>
            </> : 
            <> </>
          }
        </div>
      </div>

    </div>
  )
}
