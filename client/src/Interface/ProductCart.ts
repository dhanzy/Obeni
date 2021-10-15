import Product from './Product';

export default interface ProductCartProps extends Product{
    quantity: number;
    selectedSize: string;
}