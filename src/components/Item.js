import React from 'react'
import star from "../assets/images/star.svg"
import plus from "../assets/images/plus.svg"
import minus from "../assets/images/minus.svg"
import "./components.css";


export default function Item({data,cartItems,setcartItems,handleAdd,handleRemove,check,get_length}) {

  return (
    <div className='item' key={data.id}>
        <div className='image-holder'>
            <img src={data.image}  />
        </div>
        <div className='item-details'>
            <div className='title'>
                <h3>{data.title}</h3>
            </div>
            <div className='rating'>
                <img src={star} alt="star"/>
                <p>{data.rating.rate}</p>
            </div>
            <div className='item-footer'>
                <div className='price'>
                    <p>₹ {data.price}</p>
                </div>
                <div className='quantity'>
                    { check(data.id) ? 
                    <div>
                        <div className='two-buttons-div'>
                            <button className='minus' onClick={()=>{handleRemove(data.id)}}><img src={minus}/></button>
                            <p>{get_length(data.id)}</p>
                            <button className='plus' onClick={()=>{handleAdd(data.id)}}><img src={plus}/></button>
                        </div>
                    </div> : 
                    <div className='single-add'>
                        <button onClick={()=>{handleAdd(data.id)}}>
                            <div className="text">
                                <div className='plus'>+ </div>
                                <div>Add</div>
                            </div>
                        </button>    
                    </div>}
                    
                </div>
            </div>
            { get_length(data.id)===5? <p className='limit-reached'>Max. 5 allowed</p> : <></>}
        </div>
    </div>
  )
}
