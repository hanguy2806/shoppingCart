import React from 'react'

function Product(props){
     
        return(
        <div>
           <img src={props.img} alt={props.img}/>
           <p>Title: {props.title}</p>
           <p>Description: {props.desc}</p>
           <p><b>Price: {props.price}</b></p>
         </div>
         )            
    }

   

export default Product