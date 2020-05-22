import Item1 from '../images/chewy.jpg';
import Item2 from '../images/hershey.png';
import Item3 from '../images/kitkat.jpg';
import Item4 from '../images/mm.png';
import Item5 from '../images/nestle.jpg';
import Item6 from '../images/oreo.png';
import Item7 from '../images/Toblerone.jpg';
import {ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,SUB_SHIPPING}
from '../actions/action-types/cart-actions';

const initState={
    items:[
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6},
        {id:7,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item7}
    ],
    cart:[],
    total:0
}
const cartReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_TO_CART:{
            let addedItem=state.items.find(item=>item.id===action.id)
            let existed_item=state.cart.find(item=>action.id===item.id)
            if(existed_item){
                addedItem.quantity+=1
                return {
                    ...state,
                    total: state.total+addedItem.price
                }
            }else{
                addedItem.quantity=1;
                let newTotal= state.total+addedItem.price
                return{
                    ...state,
                    cart:[...state.cart,addedItem],
                    total: newTotal
                }
            }
        }
        case REMOVE_ITEM:{
            let removedItem=state.cart.find(item=>action.id===item.id)
            let remainingItems=state.cart.filter(item=>action.id !== item.id)
            return {
                ...state,
                cart:remainingItems,
                total:state.total-(removedItem.price*removedItem.quantity)
            }  
        }      
        case ADD_QUANTITY:{
            let addedItem=state.items.find(item=>item.id===action.id);
            addedItem.quantity+=1
            return{
                ...state,
                total: state.total+addedItem.price
            }
        }
        case SUB_QUANTITY:{
            let subedItem=state.cart.find(item=>action.id===item.id)
            
            if(subedItem.quantity===1){
                let remainingItems=state.cart.filter(item=>action.id=item.id)
                let newTotal= state.total-subedItem.price
                return {
                    ...state,
                    cart: remainingItems,
                    total: newTotal
                }
            }else{
                subedItem.quantity-=1;
                return{
                    ...state,
                    total: state.total-subedItem.price
                }
            }
        }
        case ADD_SHIPPING:{
            return{
                ...state,
                total:state.total+10
            }
        }
        case SUB_SHIPPING:{
            return {
                ...state,
                total: state.total-10
            }
        }
           
        default: {return state}
            
        }
}
export default cartReducer