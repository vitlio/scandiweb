import React from 'react';
import {NavLink} from 'react-router-dom';

class HeaderCart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            total: this.props.total,
            cart: this.props.cart
        }
    }
    render(){
        let total = this.props.cart.map(i => i.prices.filter(i => i.currency === this.props.currencyName)[0].amount * i.countInCart)
            .reduce((sum, current) => {  return sum + current;  }, 0).toFixed(2);
            this.props.amountTotal(total)
        return(
            <div className='headerCart'>
                <div className="headerCart-title">
                    <div style={{fontWeight: 700, height: '26px'}}>My Bag,&nbsp;<span style={{fontWeight: 400}}>{this.props.cart.length} items</span></div>
                </div>
                <div className="headerCart-items">
                    {this.props.cart.map(i => {return (
                                    <div key={i} className="headerCart-itemCard">
                                        <div className="headerCart-itemCard__description">
                                            <div className="headerCart-itemCard__title">{i.name}</div>
                                            <div className="headerCart-itemCard__price">{this.props.currency}{i.prices.filter(cur => cur.currency === this.props.currencyName)[0].amount}</div>
                                            <div className="headerCart-itemCard__sizes">
                                            {i.choosenSize.map(sz => {switch(sz[0].toLowerCase()){
                                                case 'color': let bg={backgroundColor: sz[1]}; return (<div className='headerCart-itemCard__color' style={bg}></div>);
                                                case 'size': return (<div className='headerCart-itemCard__size'>{sz[1]}</div>);
                                                default: return (<div className='headerCart-itemCard__default'>{sz[1]}</div>);
                                            }})}
                                            </div>
                                        </div>
                                        <div className="headerCart-itemCard__btnPhoto">
                                            <div className="headerCart-itemCard__btn">
                                                <div className="headerCart-itemCard__btnInc" onClick={() => this.props.addThisItemToCart({...i, countInCart: 1})}>+</div>
                                                <div className="headerCart-itemCard__amount">{i.countInCart}</div>
                                                <div className="headerCart-itemCard__btnInc" onClick={() => this.props.removeThisItemFromCart({...i, countInCart: 1})}>-</div>
                                            </div>
                                            <div className="headerCart-itemCard__photo">
                                                <img src={i.gallery[0]} alt="photo" />
                                            </div>
                                        </div>
                                    </div>
                        )
                    })
                    }
                </div>
                <div className="headerCart-total">
                    <span style={{fontFamily: 'Roboto', fontWeight: 500}}>Total</span>
                    <span>{this.props.currency}{this.props.total}</span>
                </div>
                <div className="headerCart-buttons">
                    <div className="headerCart-bagBtn" onClick={e => this.props.cartOpenClose()}><NavLink to='/cart' className='headerLinksA' >View bag</NavLink></div>
                    <div className="headerCart-checkoutBtn">CHECK OUT</div>
                </div>
            </div>
        )
    }
}

export default HeaderCart;