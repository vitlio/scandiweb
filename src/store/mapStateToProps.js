export default function mapStateToProps(component){
    switch(component){
        case 'Header': return state => {
            return {
                currency: state.currency,
                currencyArrow: state.currencyArrow,
                currencyName: state.currencyName,
                cartOpen: state.cartOpen,
                cart: state.cart,
            }
        };
        case 'Currency': return state => {
            return {
                currency: state.currency,
            }
        };
        case 'Itemlist': return state => {
            return {
                items: state.items,
                currency: state.currency,
                category: state.category,
                currencyName: state.currencyName
            }
        };
        case 'Category': return state => {
            return {
                category: state.category,
                cartOpen: state.cartOpen,
                headerMenu: state.headerMenu,
            }
        };
        case 'Item': return state => {
            return {
                currentItem: state.currentItem,
                currency: state.currency,
                currencyName: state.currencyName,
            }
        };
        case 'ItemPage': return state => {
            return {
                currentItem: state.currentItem,
                currency: state.currency,
                cart: state.cart,
                cartOpen: state.cartOpen,
                currencyName: state.currencyName,
            }
        };
        case 'HeaderCart': return state => {
            return {
                goodsCount: state.goodsCount,
                cart: state.cart,
                total: state.total,
                currency: state.currency,
                currencyName: state.currencyName,
            }
        };
        case 'Cart': return state => {
            return {
                cart: state.cart,
                currency: state.currency,
                currencyName: state.currencyName,
            }
        }
        default: return undefined;
    }
}