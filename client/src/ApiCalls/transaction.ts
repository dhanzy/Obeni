import FetchOptions from '../Interface/FetchOptions';
import ProductCartProps from '../Interface/ProductCart';

const fetchInstance = process.env.REACT_APP_API_URL;



export const verifyTransaction = async(response: any, cart: ProductCartProps[])=>{
    const fetchoptions:FetchOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart),
    }
    return await fetch(`${fetchInstance}/paystack/verify_transaction/?reference=` + response.reference, fetchoptions)
        .then((res) => res.json)
        .catch(() => ({error: 
            {message: "Unable to verify transaction"}
        }))
}