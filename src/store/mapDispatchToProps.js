import { currencyArrowAC, setCategory, currentCurrencyAC, cartOpenAC, 
    setCurrentItem, removeFromCartAC, addTotalCountAC, setHeaderMenuAC, 
    addToCartAC, currentCurrencyNameAC } from "./reducers";

export default function mapDispatchToProps(component){
    switch(component){
        case 'Header': return dispatch => {
            return{
                currencyArrowOpen: () => dispatch(currencyArrowAC()),
                currentPageDispatch: (e) => dispatch(setCategory(e)),
                cartOpenClose: () => dispatch(cartOpenAC()),   
                amountTotal: value => dispatch(addTotalCountAC(value)),             
            }
        };
        case 'Currency': return dispatch => {
            return {
                changeCurrentCurrencyName: value => {return dispatch(currentCurrencyNameAC(value))},
                changeCurrentCurrency: value => {dispatch(currencyArrowAC()); return dispatch(currentCurrencyAC(value))},
            }
        };
        case 'Category': return dispatch => {
            return{
                currentPageDispatch: (e) => dispatch(setCategory(e)),
            }
        };
        case 'Item': return dispatch => {
            return{
                itemDispatch: value => dispatch(setCurrentItem(value)),
            }
        };

        case 'ItemPage': return dispatch => {
            return{
                addThisItemToCart: value => dispatch(addToCartAC(value)),
            }
        };
        case 'Itemlist': return dispatch => {
            return{
                itemDispatch: value => dispatch(setCurrentItem(value)),
            }
        };
        case 'HeaderCart': return dispatch => {
            return{
                amountTotal: value => dispatch(addTotalCountAC(value)),
                addThisItemToCart: value => dispatch(addToCartAC(value)),
                removeThisItemFromCart: value => dispatch(removeFromCartAC(value)),
                cartOpenClose: () => dispatch(cartOpenAC()),   
            }
        };
        case 'Cart': return dispatch => {
            return{
                addThisItemToCart: value => dispatch(addToCartAC(value)),
                removeThisItemFromCart: value => dispatch(removeFromCartAC(value)),
            }
        };
        case 'Catalog': return dispatch => {
            return{
                setHeaderMenu: value => dispatch(setHeaderMenuAC(value)),
            }
        };

        default: return undefined;
    }
}