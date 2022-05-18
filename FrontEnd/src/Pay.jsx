import { useState , useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {useHistory} from "react-router-dom"
import axios from "axios"

const KEY = "pk_test_51L0l6eEdEw0sD3iSL8n1JOqCGxNeIG0EqAmbMuEqH9dCsP0cDJfdzJ26TnNnJIzVHnb92HlIevn70zsk2KZYlMoe00j9qLwSts"

const Pay = () => {

    const [stripeToken , setStripeToken] = useState(null)

    const history = useHistory()

    const onToken = (token) => {
        setStripeToken(token)
        console.log("token" , token)
    }
    useEffect(() => {
        const makePayment = async () => {
            try{
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId:stripeToken.id,
                        amount:2000,
                    }
                );
                console.log(res.data);
                history.push("/success")
            }catch(err){
                console.log(err);
            }
        }
        stripeToken && makePayment()
    },[stripeToken , history])

    return(
        <div
            style={{
                height:"100vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}
        >
            {stripeToken ? <span>Processing. please wait...</span> : (
                <StripeCheckout
                    name="Fast Shop"
                    image="https://avatars.githubusercontent.com/u/1486366?v=4"
                    billingAddress
                    shippingAddress
                    description="Your total is$20"
                    amount={2000}
                    token={onToken}
                    setPublishableKey={KEY}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border:"none",
                            width:120,
                            borderRadius:5,
                            padding:"20px",
                            backgroundColor:"black",
                            color:"white",
                            fontWeight:"600",
                            cursor:"pointer"
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div>
    )
}

export default Pay