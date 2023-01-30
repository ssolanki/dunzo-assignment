import '../styles/Product.css'
import star from '../assets/images/star.png'
import { useEffect, useState } from 'react';
function Product({product,products,updateProducts})
{
    const [prodCon,UpProdCon]=useState(product.qty);
    let bColor='';
    // useEffect(()=>{
    //   UpProdCon(product.qty)
    //   console.log(prodCon)
    // },[product.qty])
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
          
                
                Uprod();
          }}>
            
            <span className='dist plus-icon' >+</span> ADD
            </div>: <div className={'c-but-fon c-add-color cc-add-button '} >
              <span className='c-full-h' onClick={()=>{
              
                  
              Downprod();
        }}>
          <span className='cc-minus-icon' ></span>
            </span>
             <span className='c-qty'>{product.qty}</span>
           
            <span className={
              'c-plus-icon cursor '+bColor} onClick={()=>{
             
                  
                  Uprod();
            }}>+</span>
            </div>
           }
        </div>
        </span>
        </>
        
    );
}


export default Product;