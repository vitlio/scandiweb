import React from "react";
import { Route } from 'react-router';
import CATEGORY_W from "./category_w";

class Catalog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            headerMenu: []
        };
    }
    componentDidMount(){
        fetch('http://localhost:4000?query={category{products{category}}}').then(res => res.json())
        .then(data => {
            this.setState({headerMenu: Array.from(new Set(data.data.category.products.map(i=>i.category)))});
        })
    }
    render(){
        return(
            <div className="wrap">
            {     
                this.state.headerMenu.map(i => {  let link = '/' + i; return <Route path={link}   render={() => <CATEGORY_W page={{i}}/>}/>} )
            }
            </div>
        )
    }
}

export default Catalog;