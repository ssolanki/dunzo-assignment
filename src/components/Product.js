import React from 'react'
import star from '../images/star.svg'
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'
import '../App.css'

export default function Product( {data, cartItems, handleAddProduct, handleRemoveProduct } ) {
    // https://fakestoreapi.com/products/1

    const findItem = (id) => {
        for (let i=0; i<cartItems.length; i++) {
            if (id === cartItems[i].id)     return true;
        }
        return false;
    }

    const countOfItem = (values) => {
        for (let i=0; i<cartItems.length; i++) {
            if (values.id === cartItems[i].id)     return cartItems[i].quantity;
        }
        return 0;
    }
    
  return (
    <>
      
    <div className='grid-items' >
    {data.map((values) => {
       return(
            <>

                <div className="item">
                    <div className="image-holder">
                        <img src={values.image} alt="..." />
                    </div>
                    <div className="item-details">
                        <div className="title">
                            <h3>{values.title}</h3>
                        </div>
                        <div className="rating">
                            <img src={star} alt="star" />
                            {values.rating.rate}
                        </div>
                        <div className="item-footer">
                            <div className="price">
                                ₹ {values.price}
                            </div>
                            <div className="quantity">
                                {
                                    findItem(values.id) ?
                                    <div>
                                        <div className="two-buttons-div">
                                            <button className="minus" onClick = {() => handleRemoveProduct(values)}><img src={minus} alt={minus}/></button>   
                                            <p>{countOfItem(values)}</p>
                                            <button className="plus" onClick = {() => handleAddProduct(values)}><img src={plus} alt={plus}/></button>       
                                        </div>
                                    </div>
                                    :
                                    <div className="single-add">
                                        <button onClick = {() => handleAddProduct(values)}>
                                            <div className="text">
                                                <div className="plus">+ </div>
                                                <div>Add</div>
                                            </div>
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
       ) 
    })}
    </div>
    </>
  )

}
