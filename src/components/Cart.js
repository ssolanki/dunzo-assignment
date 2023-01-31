import React from 'react'
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'
import order_point from '../images/order_point.svg'
import empty_cart from '../images/empty_cart.svg'
import '../App.css'

export default function Cart( {cartItems, handleAddProduct, handleRemoveProduct, handleCartClear} ) {
  return (
    <>
        {/*     className='my-container'       */}
        <div>
            
            {/* <div>
                {cartItems.length >= 1 &&  (
                    <button onClick={handleCartClear}> Clear Cart </button>
                )}
            </div> */}

 {/* ................................    updates from here   ..................................... */}

            { 
                cartItems.length === 0 && (
                    <div className="empty-cart">
						<img src={empty_cart} className="empty-cart-img" alt="empty-cart-logo"/>
						<p>Products you add will appear here</p>
					</div>
                )
            }

            <div className='Cart'>
                {cartItems.map((item) => (

            // so here it's a javascript object/function here everything should be in one div ... 

                    <div key={item.id}>
                        <div className='cart-items' key={item.id}>
                            <div className="order-point">
                                <img src={order_point} alt="order_point" />
                            </div>
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-title">
                                    <p>{item.title}</p>
                                </div>
                                <div className="cart-item-quantity">
                                    <div className="two-buttons-div">
                                    <button onClick={() => handleRemoveProduct(item)} className='minus' ><img src={minus} alt="minus-logo"/></button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => handleAddProduct(item)} className='plus' ><img src={plus} alt="plus-logo"/></button>
                                    </div>
                                </div>
                                <div className="cart-item-price">
                                    ₹{(item.quantity * item.price).toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <div>
                            { 
                                item.quantity === 5 ? <p className='limit-reached-cart'>Max. 5 allowed</p> : <></>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
