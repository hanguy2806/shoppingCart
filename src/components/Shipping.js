import React, {Component} from 'react'
import {connect} from 'react-redux'

class Shipping extends Component{
componentWillUnmount(){
    if(this.refs.shipping.checked){
        this.props.substractShipping()
    }
}
handleChecked = (e)=>{
    if(e.target.checked){
        this.props.addShipping()
    }else{
        this.props.substractShipping();
    }
}
render(){
    return (
        <div>
            <label>
                <input type="checkbox" ref="shipping" onChange={this.handleChecked}/>
                <span>Shipping(+10$)</span>
            </label>
    <b>Total: {this.props.total} $</b>
    <button>Check out</button>
        </div>
    )
}
}
const mapStateToProps=(state)=>{
    return{
        cart: state.cart,
        total: state.total
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addShipping:()=>{dispatch({type:'ADD_SHIPPING'})},
        subShipping:()=>{dispatch({type:'SUB_SHIPPING'})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shipping)