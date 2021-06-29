import React, { createRef } from 'react';

class ItemPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageURL: this.props.currentItem.gallery[0],
            choosenSize: [],
            item: this.props.currentItem,
        };
        this.ref = React.createRef();
    }
    changeImageURL(e){
        this.setState({imageURL: e.target.src})
    }

    recordAttribute(field, value){
        if(!this.state.choosenSize.find(i => i[0]) === field){
        this.setState({choosenSize:[...this.state.choosenSize, [field,value]]})}else{
            this.setState({choosenSize:[...[...this.state.choosenSize].filter(i => i[0]!=field),[field,value]]})
        }
    }
    createThisItem(){
            return ({
                ...this.props.currentItem, choosenSize: this.state.choosenSize, countInCart: 1,
            })
    }
    componentDidMount(){
        this.ref.current.innerHTML = this.props.currentItem.description; 
    }
    render(){
        this.props.cartOpen?document.body.classList.add('component-overflow'):document.body.classList.remove('component-overflow');
        return(
            <div className="wrap">
                <div className="imagePage-container">
                    <div className="imagePage-photoSection">
                        <div className="imagePage-photoCollection">{this.props.currentItem.gallery.map((i, idx) => {return <img src={i} alt={idx} onClick={e => this.changeImageURL(e)} />})}</div>

                        <div className="imagePage-mainPhoto"> <img src={this.state.imageURL} alt="" /> </div>
                    </div>
                    <div className="imagePage-descriptionSection">
                        <div className="imagePage-title">
                            <div style={{fontWeight: 600, marginBottom: '16px'}}>{this.props.currentItem.name.split(' ')[0]}</div>
                            <div>{this.props.currentItem.name.split(' ').slice(1)}</div>
                        </div>
                        {
                            this.props.currentItem.attributes&&
                            this.props.currentItem.attributes.map(att => { 
                                    return(
                                        <div className="imagePage-sizes">
                                            <div className="imagePage-block-title">{att.name}:</div>
                                            {att.items.map(item => {
                                                let classes = att.name == "Color" ? 'imagePage-colorBox' : 'imagePage-sizeBox'; 
                                                if(this.state.choosenSize.length) { 
                                                    if(this.state.choosenSize.find(i => i[1].toLowerCase() == item.value.toLowerCase()&&i[0].toLowerCase() == att.name.toLowerCase()))
                                                    (classes += att.name == "Color" ? ' imagePage-colorBox-active' : ' imagePage-sizeBox-active');
                                            }
                                            let roundStyle;
                                            if(att.name == "Color"){
                                                roundStyle = {backgroundColor: item.value};
                                            }
                                                return att.name == "Color" ? (<div className={classes} style={roundStyle} onClick={ (e) => {this.recordAttribute(att.name, item.value);
                                                              }}></div>) : <div className={classes} onClick={ (e) => {this.recordAttribute(att.name, item.value);
                                                              }}>{item.value}
                                                        </div>})}
                                        </div>
                                    )
                                })
                        }
                        <div className="imagePage-price">
                            <div className="imagePage-block-title">PRICE:</div>
                            <div className="imagePage-block-price">{this.props.currency}{this.props.currentItem.prices.filter(i => i.currency === this.props.currencyName)[0].amount}</div>
                        </div>
                        <div className="imagePage-cartButton" onClick={() =>this.props.addThisItemToCart(this.createThisItem()) }>ADD TO CART</div>
                        <div className="imagePage-description" ref={this.ref}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemPage;