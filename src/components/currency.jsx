import React from 'react'

class Currency extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currencies: [],
            currencyType: {
                'USD': '$',
                'EUR': '€',
                'JPY': '¥',
                'RUB': '₽',
                'AUD': '$',
                'GBP': '£',
            }
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000?query={currencies}').then(res => res.json())
        .then(data => {
            this.setState({currencies : data.data.currencies})
        })
    }
    render(){
        return(
            <div className="currency-modal">

                {this.state.currencies.map(i => 
                        <div onClick={() => {this.props.changeCurrentCurrency(i); this.props.changeCurrentCurrencyName(i)}}>{this.state.currencyType[i]} {i}</div>
                    )}
            </div>
        );
    }
};

export default Currency;