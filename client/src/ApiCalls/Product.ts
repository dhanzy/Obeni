import FetchOptions from '../Interface/FetchOptions';


export const getProducts = async() => {
    const fetchoptions:FetchOptions = {
        method: 'GET',
        credentials: 'include'
    }
    return await fetch('//', fetchoptions)
        .then((res) => res.json())
        .catch((err) => ({
            error: {message: 'Unable to connet to server'}
        }))
}

export const addProduct = async() => {
    const fetchOptions:FetchOptions = {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        credentials: 'include'
    };
    return await fetch('//', fetchOptions)
        .then((res) => res.json())
        .catch(() => ({
            error: { message: 'Unable to add product to cart' }
        }))
}

export const updateCart = async() => {
    const fetchoptions:FetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
    }
    return await fetch('//', fetchoptions)
        .then((res) => res.json())
        .catch((err) => ({
            error: { message: 'Unable to update Cart' }
        }))
}