import '../styles/Cart.css'

import nonVegIcon from '../assets/images/non-veg.png'
import { useState } from 'react';
import { useEffect } from 'react';

function Cart({product,products,updateProducts})
{
    const [val,Uval]=useState(false)
    const [max,Umax]=useState(true);
    const [prodCon,UpProdCon]=useState(product.qty);
    let bColor='';
    // useEffect(()=>{
    //     UpProdCon(product.qty)
    //     console.log(prodCon)
    //   },[product.qty])
    const Uprod=()=>{
        const prodqty=products.map((prod)=>{
            {
                if(prod.id==product.id&&product.qty<5)
                {
                    return {...prod,qty:product.qty+1};
                }
                else
                return prod
            }
        });
        updateProducts(prodqty);
     }
     const Downprod=()=>{
      const prodqty=products.map((prod)=>{
          {
              if(prod.id==product.id&&product.qty>0)
              {
                
                  return {...prod,qty:product.qty-1};
              }
              else
              return prod
          }
      });
      updateProducts(prodqty);
   }
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
              
                  
              Downprod();
        }}>
          <span className='c-minus-icon' ></span>
          </span>
             <span className='c-qty'>{product.qty}</span>
           
            <span className={
              'c-plus-icon cursor '+bColor} onClick={()=>{
            
                Uprod();
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