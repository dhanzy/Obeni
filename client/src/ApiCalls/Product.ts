import FetchOptions from '../Interface/FetchOptions';


const fetchInstance = process.env.REACT_APP_API_URL;

export const getProducts = async(qnew=false,qcategory=undefined,limit=0) => {
    console.log('Running getProducts')
    const fetchoptions: FetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        },
    };
    console.log(fetchInstance)
    let producturl = `${fetchInstance}/product/`
    if (qnew && limit){
        producturl += `?new=true&limit=${limit.toString()}`
    }
    else if (qcategory && limit){
        producturl += `?category=${qcategory}&limit=${limit.toString()}`
    }
    else if(qcategory){
        producturl += `?category=${qcategory}`
    }
    else if (qnew){
        producturl += '?new=true'
    }
    else if (limit){
        producturl += `?limit=${limit.toString()}`
    }
    return await fetch(producturl, fetchoptions)
        .then((res) => res.json())
        .catch((err) => ({
            error: {message: `Unable to connect to server: ${err}`}
        }))
}

export const getProductById = async(productId:string) => {
    const fetchoptions: FetchOptions = {
        method: 'GET',
    };
    return await fetch(`${fetchInstance}/product/${productId}`, fetchoptions)
        .then((res) => res.json())
        .catch((err) => ({
            error: {message: `Unable to connet to server: ${err}`}
        }))
}


export const addProduct = async() => {
    const fetchOptions:FetchOptions = {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
    };
    return await fetch(`${fetchInstance}/product`, fetchOptions)
        .then((res) => res.json())
        .catch(() => ({
            error: { message: 'Unable to add product to cart' }
        }))
}

export const getProductByCategory = async(cat: string, limit: number|null =null) => {
    const fetchOptions:FetchOptions = {
        method: "GET", 
        headers: {
            'Content-Type':'application/json'
        },
    };
    return await fetch(limit !== null ? `${fetchInstance}/product/?category=${cat}&limit=${limit}` : `${fetchInstance}/product/?category=${cat}`, fetchOptions)
        .then((res) => res.json())
        .catch(() => ({
            error: { message: 'Unable to add product to cart' }
    }))
}

