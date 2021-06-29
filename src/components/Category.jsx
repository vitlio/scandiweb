import React from "react";
import '../index.css'
import ITEMLIST_W from "./itemlist_w";

class Category extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        this.props.cartOpen?document.body.classList.add('component-overflow'):document.body.classList.remove('component-overflow');
        return(
            <div className="wrap">
                <div className="categoryName">
                    <h2>{this.props.category}</h2>
                </div>
                <ITEMLIST_W/>
            </div>
        )
    }
}

export default Category;