import React from 'react';
import {NavLink} from 'react-router-dom';
import ITEM_W from './item_w';

class Itemlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }

    }
    componentDidMount(){
            let url = 'http://localhost:4000?query={category{products{category,gallery,inStock,name,description,attributes{id,name,type,items{displayValue,value,id}} prices{currency,amount}}}}'
            fetch(url).then(res => res.json())
            .then(data => 
                this.setState({items: data.data.category.products.filter(i => i.category.toLowerCase() === this.props.category.toLowerCase())})
            )
    };
    render(){
        return(
            <div className="itemlist">
                    {this.state&&this.state.items.map((i, idx) => (
                <div className="item-container-cell"><NavLink to='/item'><ITEM_W key={idx} item={i} currency={this.props.currency} onClick={() => this.props.itemDispatch(i)}/></NavLink></div>))}
            </div>
        )
    }
}

export default Itemlist;