import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import Product from './Product'

class Products extends Component{
    handleClick=(id)=>{
        this.props.addToCart(id);
    }
    render(){
        let itemList=this.props.items.map(item=>{
            return(
                <li key={item.id}>                  
                         <Product img={item.img} title={item.title} desc={item.desc} price={item.price}/>
                        <span><button onClick={()=>{this.handleClick(item.id)}}>add</button></span>
                 
                </li>
            )
        })
        return(
            <div>
                <h1>All products</h1>
        <ul>{itemList}</ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        items: state.items
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart: (id)=>dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)