import {ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions';

//add to cart action:
export const addToCart=(id)=>{
    return {
        type: ADD_TO_CART,
        id
    }
}
// remove item 
export const removeItem=(id)=>{
    return {
         type:REMOVE_ITEM,
     id
    }
    
}
//deduce quantity of item
export const subtractQuantity=(id)=>{
    return {
         type:SUB_QUANTITY,
    id
    }   
}
//add quantity of item 
export const addQuantity=(id)=>{
    return {
        type: ADD_QUANTITY,
        id
    }
}
