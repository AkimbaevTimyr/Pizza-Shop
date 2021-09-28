import orders from '../../store/orders'
import { toJS } from "mobx";
export const useCart = () =>{
    const cartItems  = toJS(orders.orders);
    const totalPrice = cartItems.reduce((sum, obj)=> (obj.allPrice + sum),0);
    return {totalPrice}
}