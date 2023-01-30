import '../styles/Product.css'
import star from '../assets/images/star.png'
import { useEffect, useState } from 'react';
function Product({product,products,updateProducts,Uprod,Downprod})
{
    
    let bColor='';
    // useEffect(()=>{
    //   UpProdCon(product.qty)
    //   console.log(prodCon)
    // },[product.qty])
    

   if(product.qty==5)
   {
       bColor='c-add-color-d'
   }
   else
   bColor='';

    return (
        <>
        
        <span className='prodCont prod-fon'>
        <img src={product.image} className='pImg'></img>
        <div className='priCont'>
          <div className='prodTi prodF'>{product.title}</div>
          <div className='starF'><img src={star} alt='star' className='star-dist'></img>{product.rating.rate}</div>
        </div>
        <div className='coCont'>
          <div className='priceF '><span className='price-font'>₹</span>{product.price}</div>
          {
            !product.qty?
          <div className='but-fon add-color add-button cursor' onClick={()=>{
          
                
                Uprod(product);
          }}>
            
            <span className='dist plus-icon' >+</span> ADD
            </div>: <div className={'c-but-fon c-add-color cc-add-button '} >
              <span className='c-full-h' onClick={()=>{
              
                  
              Downprod(product);
        }}>
          <span className='cc-minus-icon' ></span>
            </span>
             <span className='c-qty'>{product.qty}</span>
           
            <span className={
              'c-plus-icon cursor '+bColor} onClick={()=>{
             
                  
                  Uprod(product);
            }}>+</span>
            </div>
           }
        </div>
        </span>
        </>
        
    );
}


export default Product;