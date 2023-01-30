import logo from "./logo.png";
import "./App.css";
import { connect } from "react-redux";
import Product from "./components/Product";
// import moment from "moment";
import placeHolderImg from "./assets/images/placeholder.png"
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Totaling from "./components/Totaling";
// Note: use moment for formatting date like moment().format('LLLL')

function App() {
     const [products,updateProducts]=useState([]);
	 const [total,updateTotal]=useState(0);
	useEffect(()=>{
		const fetchProducts=async ()=>{
			const res=await fetch('https://fakestoreapi.com/products?limit=10');
			const data=await res.json();
			
			if(!localStorage.getItem("products")||JSON.parse(localStorage.getItem("products")).length===0)
			{
				const prodqty=data.map((prod)=>{
					return {...prod,qty:0}
				});
				localStorage.setItem("products",JSON.stringify(prodqty))
				updateProducts(prodqty);
				
			}
			else{
				//console.log(JSON.parse(localStorage.getItem("products")))
           
				updateProducts(JSON.parse(localStorage.getItem("products")));
			}
			
			
		}
		fetchProducts();
	},[])
	useEffect(()=>{
		let tot=0;
     products.forEach((product)=>{
         tot+=(product.qty*product.price);
	 },[products])
	 
	 updateTotal((tot));
	 console.log(total)
	if(products.length!==0)
	 localStorage.setItem("products",JSON.stringify(products))
	 console.log(JSON.parse(localStorage.getItem("products")))
	},[products])
	const emptyCart=()=>{
		const prodqty=products.map((prod)=>{
            {
                
                    return {...prod,qty:0};
               
            }
        });
		if(products.length!==0)
		localStorage.setItem("products",JSON.stringify(prodqty))
        updateProducts(prodqty);
		
	}
	const [val,Uval]=useState(true);
	
	return (
		<div className="App">
			<header className="App-header">
				<div className="Container">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
			</header>
			<div className="Container">
				<div className="App-Content">
					       <div>
						   <div className='prod-type-head'>Products - <span className="prod-qty-font">40 results</span></div>
						    <div className="Prods-Cont">
								{products.map((product)=>{
									
									return <Product key={product.id} product={product} products={products} updateProducts={updateProducts}/>
								})}
							 
							 </div>
							 </div>
							 <div className="price-qty-cont" >
								{val? <div className='c-heading-cont'>
                      <h1 className='c-cart-fs c-order-h c-mar'>Your Order</h1>
                      <span className='c-clear-c cursor' onClick={emptyCart}>Clear Cart</span>

                      </div>: 
					  <div className="c-em-oh">
					  <h1 className='c-cart-fs c-mar'>Your Order</h1>
					  </div>
					  }
					  
							 <div className="check-com ">
								<div className="prod-item-cont">
								{products.length? products.map((product)=>{
									console.log(product.qty)
									if(product.qty)
									return <Cart key={product.id} product={product} products={products} updateProducts={updateProducts}/>
									else
									return "";
								}):''}
								</div>
								{total ? <div className='t-total-cont' >
							 <Totaling total={total} products={products} emptyCart={emptyCart}/>
							 </div>:''}
							 </div>
							 </div>
					
				</div>
			</div>
		</div>
	);
}

export default connect()(App);
