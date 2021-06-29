import React from 'react';
import '../index.css'

class Item extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let price = this.props.item.prices.filter(i => i.currency === this.props.currencyName);
        return(
            <div className="item-container"  onClick={e => e.target.closest('.item-container')&&this.props.itemDispatch(this.props.item)}>
                <div className="item-cartButton"><img src="images/empty-cart-white.svg" alt="empty cart" /></div>
                <div className="item-content">
                    <div className="item-content__image"><img src={this.props.item.gallery[0]} alt={this.props.item.name} /></div>
                    {!this.props.item.inStock&&<div className='item-content-available-layout'><div className='item-content-available'>OUT OF STOCK</div></div>}
                    <div className="item-description">
                        <div className="item-title">{this.props.item.name}</div>
                        <div className="item-price">{this.props.currency}{price[0].amount}</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Item;