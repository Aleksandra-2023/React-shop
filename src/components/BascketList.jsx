import {BascketItem} from './BascketItem';
import { useContext } from "react";
import { ShopContext } from "../context";


function BascketList(){
  //  const {order = [], 
  //         handleBascketShow = Function.prototype,
  //         removeFromBascket = Function.prototype,
  //         decremQuantity = Function.prototype,
  //         incremQuantity = Function.prototype
  //       } = props;   
   const {
    order = [],
    handleBascketShow = Function.prototype
   } = useContext(ShopContext)


   const totalPrice = order.reduce((sum, el)=> {
     return sum + el.price * el.quantity
   }, 0)
   return (
        <ul className="collection bascket-list">
         <li className="collection-item active">Корзина</li>
          { order.length ? order.map((item) => (
            <BascketItem key={item.id} {...item} 
            // removeFromBascket={removeFromBascket} decremQuantity={decremQuantity} incremQuantity ={incremQuantity } 
            />
          )) : (<li className="collection-item">Корзина пуста</li>)}
         <li className="collection-item active">Общая стоимость: {totalPrice} руб
         </li>
         <li className="collection-item">
         <button className='btn btn-small'>Оформить</button>
         </li>
         <i className='material-icons bascket-close' onClick={handleBascketShow}>close</i>
        </ul >
            
    )
}

export {BascketList};