import React, { createRef } from 'react';
import '../index.css'

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.ref = createRef();
    }
    beforePicture(e, i){
        let target = e.target.offsetParent.childNodes[0];
        let index = i.gallery.findIndex(src => src === target.src);
        if(index > 0) target.src = i.gallery[index-1];
    }
    afterPicture(e, i){
        let target = e.target.offsetParent.childNodes[0];
        let index = i.gallery.findIndex(src => src === target.src);
        if(index < i.gallery.length - 1) target.src = i.gallery[index+1];
    }
    componentDidMount(){
        document.body.classList.remove('component-overflow');
    }
    render(){
        return(
            <div className="wrap">
                <div className="wrap-cart">
                    <div className="categoryName">
                        <h2 style={{fontWeight: 700}}>CART</h2>
                    </div>
                    {this.props.cart.map(i => {
                        return (
                            <div className="cartPage-item">
                                            <div className="cartPage-itemCard__description">
                                                <div className="cartPage-itemCard__title"><span style={{fontWeight: 600}}>{i.name.split(' ')[0]}</span><br />{i.name.split(' ').splice(1).join(' ')}</div>
                                                <div className="cart-itemCard__price">{this.props.currency}{i.prices.filter(cur => cur.currency === this.props.currencyName)[0].amount}</div>
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
                                                <div className="cart-itemCard__photo">
                                                    
                                                    <img ref={this.ref} className="cart-img" style={{height: '185px'}} src={i.gallery[0]} alt="photo" />
                                                    <img className="arrow-btn-left" src="images/arrow-btn-left.svg" alt="<" onClick={e => this.beforePicture(e, i)} />
                                                    <img src="images/arrow-btn-left.svg" className="arrow-btn-left rotate180" alt=">" onClick={(e) => this.afterPicture(e, i)} />
                                                </div>
                                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default Cart;