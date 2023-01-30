import '../styles/Cart.css'

import nonVegIcon from '../assets/images/non-veg.png'
import { useState } from 'react';
import { useEffect } from 'react';

function Cart({product,products,updateProducts,Uprod,Downprod})
{
    
    let bColor='';
    // useEffect(()=>{
    //     UpProdCon(product.qty)
    //     console.log(prodCon)
    //   },[product.qty])

   if(product.qty==5)
   {
       bColor='c-add-color-d'
   }
   else
   bColor='';


return (
    
    <span className='c-cart-cont'>         
                <>
               
                <div className='c-priCont c-cfl-con'>
                    <div className='icon-pri-cont'>
                    <img src={nonVegIcon} alt='non-veg icon' className='veg-icon'></img>
          <div className='c-prodTi c-card-itemf'>
          <div>
          {product.title}
          </div>
          <div className='c-max-prod-font'>{product.qty==5?'Max. 5. allowed':''}</div>
          </div>
         
          </div>
          <span className='c-bp-cont'>
          <div className='c-but-fon c-add-color c-add-button'>
          <span className='cc-full-h' onClick={()=>{
              
                  
              Downprod(product);
        }}>
          <span className='c-minus-icon' ></span>
          </span>
             <span className='c-qty'>{product.qty}</span>
           
            <span className={
              'c-plus-icon cursor '+bColor} onClick={()=>{
            
                Uprod(product);
          }}>+</span>
            </div>
            <span className='c-pri-fon'>
            ₹{product.qty*product.price}
            </span>
            </span>

        </div>
        </> 
        
       
      </span>
    
);
}

export default Cart;