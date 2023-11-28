import { useEffect, useContext } from "react";
import {API_KEY, API_URL} from '../config';
import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Cart} from './Cart';
import {BascketList} from './BascketList';
import {Alert} from './Alert';
import { ShopContext } from "../context";


function Shop(){
  const { setGoods, loading, order, isBascketShow, alertName } = useContext(ShopContext)

  // const [goods, setGoods] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [order, setOrder] = useState([]);
  // const [isBascketShow, setBascketShow] = useState(false)
  // const [alertName, setAlertName] = useState('')

  // const addToBascket = (item) => {
  //   const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
  //    if(itemIndex < 0){
  //     const newItem = {
  //       ...item,
  //       quantity: 1,
  //     }
  //     setOrder([...order, newItem ])
  //   }else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if(index === itemIndex){
  //         return{
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1
  //         }
  //       } else{
  //         return orderItem
  //       }
  //     })
  //     setOrder(newOrder)
  //   }
  //   setAlertName(item.name)
  // }

  // const removeFromBascket = (itemId) => {
  //   const newOrder = order.filter(el => el.id !== itemId)
  //   setOrder(newOrder)
  // }

  // const incremQuantity = (itemId) =>{
  //   const newOrder = order.map(el => {
  //     if(el.id === itemId){
  //       const newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity
  //       }
  //     } else{
  //       return el;
  //     }
  //   })
  //   setOrder(newOrder);
  // }

  // const decremQuantity = (itemId) =>{
  //   const newOrder = order.map(el => {
  //     if(el.id === itemId){
  //       const newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity >= 0? newQuantity : 0
  //       }
  //     } else{
  //       return el;
  //     }
  //   })
  //   setOrder(newOrder);
  // }

  // const handleBascketShow = () => {
  //   setBascketShow(!isBascketShow)
  // }

  // const closeAlert = () => {
  //   setAlertName('')
  // }

  useEffect(function getGoods(){
    fetch(API_URL,{
        headers: {
            'Authorization': API_KEY
        }
    }).then(response=> response.json())
      .then(data=>{
        // data.featured && 
        setGoods(data.featured);
        // setLoading(false)
      })
      // eslint-disable-next-line
  },[])

    return <main className="container content">
      <Cart quantity={order.length} 
      // handleBascketShow={handleBascketShow}
      />
      {loading ? <Preloader /> : <GoodsList
      //  goods={goods}
      //  addToBascket={addToBascket}
        />}
      {isBascketShow && (<BascketList 
                    // order={order} 
                    // handleBascketShow={handleBascketShow} 
                    // removeFromBascket={removeFromBascket}
                    // decremQuantity = {decremQuantity}
                    // incremQuantity = {incremQuantity}
                    />
      )}
      {
        alertName && <Alert 
        // name={alertName} closeAlert={closeAlert} 
        />
      }              
      </main>
}

export {Shop}