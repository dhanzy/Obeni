import FetchOptions from '../Interface/FetchOptions';

const fetchInstance = process.env.REACT_APP_API_URL;


export const getCarts = ()=>{
    const fetchoptions:FetchOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
    }
    return fetch(`${fetchInstance}/api/cart`, fetchoptions)
}