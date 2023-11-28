import { useContext } from "react";
import { ShopContext } from "../context";


function BascketItem(props){
    const {
        id,
        name,
        price,
        quantity,
        // removeFromBascket = Function.prototype,
        // decremQuantity = Function.prototype,
        // incremQuantity = Function.prototype 
    } = props;
    const {removeFromBascket,  decremQuantity, incremQuantity} = useContext(ShopContext)
    
    return (
    <li className="collection-item">
        {name}{' '} 
        <i className="material-icons basket-quantity"
           onClick={()=>decremQuantity(id)}
           >
            remove
        </i>{' '} 
        * {quantity}{' '} 
        <i className="material-icons basket-quantity" 
            onClick={()=>incremQuantity(id)}
            >
            add
        </i>{' '} 
        = {price * quantity}
        <span className="secondary-content" onClick={() =>removeFromBascket(id)}>
            <i className="material-icons bascket-delete">close</i>
        </span>
    </li>
  )
}

export {BascketItem}