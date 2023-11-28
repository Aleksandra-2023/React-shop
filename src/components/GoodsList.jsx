import {GoodsItem} from './GoodsItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsList(props){
    const {goods = [],
        //  addToBascket = Function.prototype
        } = useContext(ShopContext);

    if(!goods.length){
       return <h3>Nothing here</h3>
    }
    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item}  
            // addToBascket={ addToBascket}
            />
            ))}
    </div>
}

export {GoodsList};