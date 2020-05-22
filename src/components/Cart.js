import React , {Component}from 'react';
import {connect} from 'react-redux'
import {removeItem, addQuantity, subtractQuantity} from '../actions/cartActions'
import Shipping from './Shipping'

class Cart extends Component{
    handleRemove=(id)=>{
        this.props.removeItem(id)
    }
    handleAddQuantity=(id)=>{
        this.props.addQuantity(id)
    }
    handleSubQuantity=(id)=>{
        this.props.subtractQuantity(id)
    }
    render(){
        let addedItem=this.props.cart.length ?
        (
            this.props.cart.map(item=>{
                return (
                    <li key ={item.id}>
                    <img src={item.img} alt={item.img}/>
                    <div className="desc">
                        <p>Title: {item.title}</p>
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}</b></p>
                        <p><p>Quantity: {item.quantity}</p></p>
                    </div>
                    <div className="handle">
                    <button onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                    <button onClick={()=>{this.handleAddQuantity(item.id)}}>+</button>
                    <button onClick={()=>{this.handleSubQuantity(item.id)}}>-</button>
                    </div>
                    </li>
                )
            })
        ):(<p>Nothing</p>)
        return (
            <div>
                <h2>cart includes: </h2>
                <ul>
                    {addedItem}
                </ul>
                <Shipping/>
            </div>
        )
    }
}
const mapStateToprops=(state)=>{
    return {
        cart:state.cart
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToprops,mapDispatchToProps)(Cart)