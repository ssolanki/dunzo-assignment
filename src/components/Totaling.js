import '../styles/Totaling.css'
function Totaling({total,products,emptyCart})
{
    
    console.log(total)
return (<div >
  <div className='t-priCont t-priCont5 t-cfl-con t-card-itemf'>
                    <div>
          <div className='t-prodTi '>Delivery fees</div>
          </div>
          <span className='t-bp-cont'>
            <span className='t-pri-fon'>
            ₹25
            </span>
            </span>

        </div>
        <div className='t-priCont t-priCont3 t-cfl-con t-card-itemf'>
                    <div>
          <div className='t-prodTi '>Order Total</div>
          </div>
          <span className='t-bp-cont'>
            <span className='t-pri-fon'>
            ₹{(total).toFixed(3)}
            </span>
            </span>

        </div>
        <div className='t-priCont t-priCont5 t-cfl-con t-total-f'>
                    <div>
          <div className='t-prodTi'>To Pay</div>
          </div>
          <span className='t-bp-cont'>
            <span className='t-pri-fon'>
            ₹{(total+25).toFixed(3)}
            </span>
            </span>

        </div>
        <div className='t-button-adj cursor' onClick={()=>{
            emptyCart();
        }}>
        <div className='t-pay-button'>
            Proceed To Pay
        </div>
        </div>
       
</div>);
}

export default Totaling;