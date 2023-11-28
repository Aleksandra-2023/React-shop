import { useContext } from "react";
import { ShopContext } from "../context";


function Cart(){
  // const{quantity = 0, handleBascketShow = Function.prototype} = props
  const {order, handleBascketShow = Function.prototype} = useContext(ShopContext)

  const quantity = order.length;

  return (<div className="cart #2979ff blue accent-3 white-text" onClick={handleBascketShow}>
    <i className="material-icons">shopping_cart</i>
    {quantity ? (<span className="cart-quantity">{quantity}</span>) : null}
  </div>)
}

export {Cart}