import React from 'react'
import "./components.css"
import plus from "../assets/images/plus.svg"
import minus from "../assets/images/minus.svg"
import order_point from "../assets/images/order_point.svg"

export default function Cart({cartItems, setCartItems,handleAdd,handleRemove}) {
  return (
    <div className='Cart'>
        {
            cartItems.map(function(item){
                return (
                <div key={item.id}>
                <div className='cart-items' key={item.id}>
                    <div className='order-point'>
                        <img src={order_point} alt="order_point" />
                    </div>
                    <div className='cart-item' key={item.id}>

                        <div className='cart-item-title'>
                            <p>{item.title}</p>
                        </div>
                        <div className='cart-item-quantity'>
                            <div className='two-buttons-div'>
                                <button onClick={()=>{handleRemove(item.id)}} className='minus' ><img src={minus} alt="minus-logo"/></button>
                                <p>{item.count}</p>
                                <button onClick={()=>{handleAdd(item.id)}} className='plus' ><img src={plus} alt="plus-logo"/></button>
                            </div>
                        </div>
                        <div className='cart-item-price'>
                            ₹ {item.total.toFixed(2)}
                        </div>
                        
                    </div>
                </div>
                <>{ item.count===5? <p className='limit-reached-cart'>Max. 5 allowed</p> : <></>}</>
                </div>
                );
            })
        }
    </div>
  )
}
