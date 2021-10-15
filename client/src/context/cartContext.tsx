import React from 'react';
import Product from '../Interface/Product';

interface ProductCartProps extends Product {
    quantity: number;
    selectedSize: string;
}

interface CartContextProps {
    cart: ProductCartProps[] | [];
    quantity: number;
    total: number;
    updateCartContext: (data: ProductCartProps) => void;
    increaseCartContext: (data: ProductCartProps) => void;
    decreaseCartContext: (data: ProductCartProps) => void;
    removeCartContext: (data: ProductCartProps) => void;
}

const CartContext = React.createContext<CartContextProps>({
    cart: [],
    quantity: 0,
    total: 0,
    updateCartContext: () => null,
    increaseCartContext: () => null,
    decreaseCartContext: () => null,
    removeCartContext: () => null
})

export const CartProvider:React.FC = ({children}): JSX.Element => {
    const [quantity, setQuantity] = React.useState<number>(0)
    const [total, setTotal] = React.useState<number>(0)
    const [cart, setCart] = React.useState<ProductCartProps[] | []>([])

    const updateCartContext = React.useCallback((data: ProductCartProps)=>{
        const cartIndex = cart.findIndex((item) => item._id === data._id && item.selectedSize === data.selectedSize)

        if (cartIndex > -1){
            cart[cartIndex].quantity += data.quantity;
            setCart(cart);
        }
        else{
            setCart((prev) => [...prev, data])
        }
        setTotal((prev) => prev += (data.quantity * data.price))
        setQuantity((prev) => prev += data.quantity)
    }, [cart])

    const removeCartContext = React.useCallback((data: ProductCartProps)=> {
        const removedCart = cart.filter(item => item === data)
        
        const remainCart = cart.filter(item => item !== data)
        setTotal((prev) => prev -= removedCart[0].price * removedCart[0].quantity)
        setQuantity((prev) => prev -= removedCart[0].quantity)
        setCart(remainCart);
    }, [cart])

    const increaseCartContext  = React.useCallback((data: ProductCartProps)=>{
        const cartIndex = cart.findIndex((item) => item._id === data._id && item.selectedSize === data.selectedSize)

        if (cartIndex > -1){
            cart[cartIndex].quantity += 1
            setCart(cart);
            setQuantity((prev) => prev += 1)
            setTotal((prev) => prev +=  cart[cartIndex].price);
        }

    }, [cart])

    const decreaseCartContext  = React.useCallback((data: ProductCartProps)=>{
        const cartIndex = cart.findIndex((item) => item._id === data._id && item.selectedSize === data.selectedSize)

        if (cartIndex > -1){
            if (cart[cartIndex].quantity < 2){
                console.log('Calling  removecart')
                removeCartContext(data);
            }
            else{
                cart[cartIndex].quantity -= 1
                setCart(cart);
                setQuantity((prev) => prev -= 1)
                setTotal((prev) => prev -= cart[cartIndex].price);
            }
        }

    }, [cart, removeCartContext])


    return (
        <CartContext.Provider value={{cart, quantity, total, updateCartContext, increaseCartContext, decreaseCartContext, removeCartContext}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext = () => React.useContext(CartContext)