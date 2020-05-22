import React , {Component}from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeItem, addQuantity, subtractQuantity} from '../actions/cartActions'
import Shipping from './Shipping'
import Product from './Product';

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
                    {/* <img src={item.img} alt={item.img}/> */}
                    <div className="desc">
                        <Product img={item.img} title={item.title} desc={item.desc} price={item.price}/>                       
                        <p><b>Quantity: {item.quantity}</b></p> 
                    </div>
                    <div className="handle">
                    <button onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                    <Link to='/cart' onClick={()=>{this.handleAddQuantity(item.id)}}>+</Link>
                    <Link to='/cart' onClick={()=>{this.handleSubQuantity(item.id)}}>-</Link>
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