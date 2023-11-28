import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem (props){
    const {id,
        name,
        description,
        price,
        full_background,
        // addToBascket = Function.prototype,
    } = props;

   const {addToBascket} = useContext(ShopContext)

    return( <div className="card">
    <div className="card-image">
      <img src={full_background} alt={name}/>
    </div>
    <div className="card-content">
    <span className="card-title">{name}</span>
      <p>{description}</p>
      <div className="card-action">
      <button className="btn" onClick={()=>addToBascket({id, name, price})}>Купить</button>
      <span className="right" style={{fontSize: '1.8rem'}}>{price} руб</span>
    </div>
    </div>
  </div>)
};

 
export {GoodsItem};

