import logo from "./logo.png";
import "./App.css";
import { connect } from "react-redux";
import { useState, useEffect} from "react";
import axios from "axios";
// import moment from "moment";
import empty_cart from "./assets/images/empty_cart.svg";
import Items from "./components/Items";
import placeHolderImg from "./assets/images/placeholder.png"

// Note: use moment for formatting date like moment().format('LLLL')

function App() {
	const [orders, setOrders]= useState([])
	const [items_data, setItems_data]= useState([])
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(`https://fakestoreapi.com/products?limit=10`)
        .then(res=>{
			// console.log(res.data);
          setItems_data(res.data);
		  setLoading(false);
        //   setLoading(false);
          // console.log(res.data);
        //   localStorage.setItem('Previousplace',res.data.name);
        //   handleBackground(res.data.main.feels_like);
        })
        .catch(err=>{
          console.log(err);
        //   setLoading(false);
          console.log("Can not able send your current location to server");
        });
	},[]);
	useEffect(() => {
		
	},[orders]);
	return (
		<div className="App">
			<header className="App-header">
				<div className="Container">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
			</header>
			<div className="main">

				<div className="items">
					{ isLoading==true ? 
						<div>Loading</div> : 
						<div className="items-test">
							{ items_data.length > 0 ? 
								(<Items data={items_data}/>) : 
									(<h1>{0}</h1>)}
						</div> 
					}
			
				</div>
				<div className="your-orders">
					{ orders.length ? (<div></div>) : 
					(<div className="empty-cart">
						<img src={empty_cart} className="empty-cart-img" alt=""/>
						<img src={empty_cart} className="empty-cart-img" alt=""/>
						<img src={empty_cart} className="empty-cart-img" alt=""/>
						<img src={empty_cart} className="empty-cart-img" alt=""/>
						<img src={empty_cart} className="empty-cart-img" alt=""/>
						<img src={empty_cart} className="empty-cart-img" alt=""/>
						<img src={empty_cart} className="empty-cart-img" alt=""/>
						<img src={empty_cart} className="empty-cart-img" alt=""/>
						<img src={empty_cart} className="empty-cart-img" alt=""/>
						<img src={empty_cart} className="empty-cart-img" alt=""/>
					</div>)
					
					}
				</div>
			</div>
			<div className="Footer">

			</div>
		</div>
	
	);
}

export default connect()(App);
