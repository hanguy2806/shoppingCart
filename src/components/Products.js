import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'

class Products extends Component{
    handleClick=(id)=>{
        this.props.addToCart(id);
    }
    render(){
        let itemList=this.props.items.map(item=>{
            return(
                <li key={item.id}>
                    <img src={item.img} alt={item.img}/>
                    <div className="desc">
                        <p>Title: {item.title}</p> 
                        <span><button onClick={()=>{this.handleClick(item.id)}}>add</button></span>
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}</b></p>                        
                    </div>
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