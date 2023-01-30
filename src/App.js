import "./App.css";
import { connect } from "react-redux";
import { useState, useEffect, useRef} from "react";
import axios from "axios";
// import moment from "moment";
import empty_cart from "./assets/images/empty_cart.svg";
import Items from "./components/Items";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Loader from "./components/Loader";

// Note: use moment for formatting date like moment().format('LLLL')

function App() {
	const [cartItems, setcartItems]= useState([])
	const [items_data, setItems_data]= useState([])
	const [isLoading, setLoading] = useState(true);
	const [total,setTotal] = useState(0)
	const firstUpdate = useRef(true);
	// const [category, setCategory] = useState("")
	const handlePay=()=>{
		setcartItems(prevCartItems=> [])
		setTotal(prevTotal=>0)
	}
	const handleAdd = async(id) => {
        let count = get_length(id);
		if(count === 5)
		{
			return ;
		}
		let data = items_data.filter((item) => item.id === id);
		data=data[0]
		// console.log("data",data);
        // if(count == 5)
        // {
        //     setlimit_reached(true);
        // }
        // else{
            if(count === 0)
            {
                setcartItems([...cartItems,{"id": id,"title": data.title,"count": 1,"price": data.price,"total": data.price}]);
            }
            else{
                for(let i = 0; i < cartItems.length; i++)
                {
                    if(cartItems[i].id === id)
                    {
                        cartItems[i].count = cartItems[i].count + 1;
                        cartItems[i].total += cartItems[i].price
						// break
                    }
                }
                setcartItems((cartItems)=>[...cartItems]);
            }   
			

			// localStorage.setItem("cartItems", JSON.stringify(cartItems));
        // }
		// console.log(cartItems)
    }
	const handleRemove = (id) => {
        let count = get_length(id);
        if(count === 1)
        {
            const filteredItems = cartItems.filter((item) => item.id !== id);
            setcartItems(filteredItems);
        }
        else{
            for(let i = 0; i < cartItems.length; i++)
            {
                if(cartItems[i].id === id)
                {
                    cartItems[i].count = cartItems[i].count - 1;
                    cartItems[i].total -= cartItems[i].price;
                }
                // break
            }
            setcartItems((cartItems)=>[...cartItems]);

        }
		
    }
    const check = (id) => {
		for(let i=0; i<cartItems.length; i++) {
			if(cartItems[i].id === id) {
				return true;
			}
		}
		return false;
};
	const get_length = (id) => {
		for(let i=0; i<cartItems.length; i++) {
				if(cartItems[i].id === id) {
					return cartItems[i].count;
				}
		}
		return 0;
	};
	useEffect(() => {
		axios.get(`https://fakestoreapi.com/products/`)
        .then(res=>{
			// console.log(res.data);
          setItems_data(res.data);
		  if(localStorage.getItem("cartItems") !== null)
		  {
			let items=JSON.parse(localStorage.getItem("cartItems"));
			console.log("After fetch");
			console.log(items);
			console.log(cartItems);
			setcartItems(prevcartItems=>items); 
          }
		  setLoading(false);
        })
        .catch(err=>{
          console.log(err);
        });
	},[]);
	useEffect(() =>{
		if(firstUpdate.current){
			firstUpdate.current = false;
			return;
		}
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
		let amount =0;
		for(let i=0; i<cartItems.length; i++) {
			amount += cartItems[i].price * cartItems[i].count;
		}
		setTotal(prevAmount=>amount);
	},[cartItems]);
	return (
		<div className="App">
			{isLoading === false ? <>
				<Header />
			<div className="main">
				
				<div className="items">
				{/* <p className="category-title">Category</p> */}
					{ isLoading===true ? 
						<div></div> : 
						<div className="items-test">
							{ items_data.length > 0 ? 
								(<Items check={check} get_length={get_length} handleAdd={handleAdd} handleRemove={handleRemove} data={items_data} cartItems={cartItems} setcartItems={setcartItems} />) : 
									(<h1>{0}</h1>)}
						</div> 
					}
			
				</div>
				<div className="your-orders">
					<div className="cart-header">
						<p>Your Orders</p>
						{/* <button>Clear cart</button> */}
					</div>
					{ cartItems.length ? (<div className="cart-fixed">
						<Cart data={items_data} handleAdd={handleAdd} handleRemove={handleRemove} cartItems={cartItems} setCartItems={setcartItems}/>
					</div>) : 
					(<div className="empty-cart">

						<img src={empty_cart} className="empty-cart-img" alt="empty-cart-logo"/>
						<p>Products you add will appear here</p>
					</div>)
					
					}
					{/* <p className="total">Total</p> */}
				</div>

			</div>
			<div className="Footer">
				{ total>0 ? <>
					<div className="delivery-fee">
						<div>
							Delivery fees
						</div>
						<div>
							₹25
						</div>
					</div>
					<div className="order-total">
						<div>
							Order Total
						</div>
						<div>
							₹ {total.toFixed(2)}
						</div>
					</div>
					<div className="total-pay">
						<div>
							To Pay
						</div>
						<div>
							₹{(total + 25).toFixed(2)}
						</div>
					</div>
					<div className="proceed-pay">
						<button onClick={handlePay}>Proceed to Pay</button>
					</div>
					</>:<></>}
					
			</div>
			</> : <>
			<Loader />
			</>}
			
		</div>
	
	);
}
export default connect()(App);