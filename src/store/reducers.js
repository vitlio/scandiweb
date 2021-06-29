import { combineReducers } from 'redux';

export let initialState = {
    currency: '$',
    currencyArrow: false,
    currencyName: 'USD',
    category: '',
    stock: true,
    cart: [],
    cartOpen: false,
    total: 0,
    goodsCount: 0,
    currentPage: 'women',
    categoryName: 'Category name',
    headerMenu: '',
    items: [    ],
    currentItem: {id: 1, inCart: false, countInCart: 0, availeble: true,  name:'Apollo Running Short', sex: 'male',   size: [{xs: true}, {s: true}, {m: true}, {l: false}], price: 50.00, photo: ['images/1.jpg'], photoCollection: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'], description: 'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.'},
};

// --------------Actions---------------

export const CURRENT_PAGE = 'CURRENT_PAGE';
export const CURRENCY_ARROW = 'CURRENCY_ARROW';
export const CURRENT_CURRENCY = 'CURRENT_CURRENCY';
export const CURRENT_CURRENCY_NAME = 'CURRENT_CURRENCY_NAME';
export const CART_OPEN = 'CART_OPEN';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CURRENT_ITEM = 'GET_CURRENT_ITEM';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_GOODS_COUNT = 'ADD_GOODS_COUNT';
export const DEC_GOODS_COUNT = 'DEC_GOODS_COUNT';
export const ADD_TOTAL_COUNT = 'ADD_TOTAL_COUNT';
export const DEC_TOTAL_COUNT = 'DEC_TOTAL_COUNT';
export const ADD_COUNT_IN_CART = 'ADD_COUNT_IN_CART';
export const DEC_COUNT_IN_CART = 'DEC_COUNT_IN_CART';
export const SET_HEADER_MENU = 'SET_HEADER_MENU';

// ----------Action Creators-----------

export const currentPageAC = value => {
        return ({
            type: CURRENT_PAGE,
            currentPage: value
        })
}; 
export const currencyArrowAC = () => {
        return ({
            type: CURRENCY_ARROW,
        })
};
export const currentCurrencyAC = value =>{
        return ({
            type: CURRENT_CURRENCY,
            currency: value,
        })
};
export const currentCurrencyNameAC = value =>{
    return ({
        type: CURRENT_CURRENCY_NAME,
        currency: value,
    })
};
export const cartOpenAC = () => {
    return({
        type: CART_OPEN,
    })
};
export const setItems = value => {
    return({
        type: GET_ITEMS,
        items: value,
    })
};
export const setCategory = value => {
    return({
        type: GET_CATEGORY,
        category: value,
    })
};
export const setCurrentItem = value => {
    return({
        type: GET_CURRENT_ITEM,
        currentItem: value,
    })
};
export const addToCartAC = value => {
    return({
        type: ADD_TO_CART,
        cart: value,
    })
};
export const removeFromCartAC = value => {
    return({
        type: REMOVE_FROM_CART,
        cart: value,
    })
}
export const addGoodsCountAC = () => {
    return({
        type: ADD_GOODS_COUNT,
    })
};
export const decGoodsCountAC = () => {
    return({
        type: DEC_GOODS_COUNT,
    })
};
export const addTotalCountAC = value => {
    return({
        type: ADD_TOTAL_COUNT,
        total: value
    })
};
export const decTotalCountAC = value => {
    return({
        type: DEC_TOTAL_COUNT,
        total: value
    })
};
export const setHeaderMenuAC = value => {
    return({
        type: SET_HEADER_MENU,
        headerMenu: value
    })
};

// -------------Reducers--------------

export const currentPage = (state = initialState.currentPage, action) => {
    switch(action.type){
        case CURRENT_PAGE: return action.currentPage;
        default: return state;
    }
};
export const currencyArrow = (state = initialState.currencyArrow, action) => {
    switch(action.type){
        case CURRENCY_ARROW: return !state;
        default: return state;
    }
};
export const currency = (state = initialState.currency, action) => {
    switch(action.type){
        case CURRENT_CURRENCY: {
            switch(action.currency){
               case 'USD': return '$';
               case 'EUR': return '€';
               case 'JPY': return '¥';
               case 'RUB': return '₽';
               case 'AUD': return '$';
               case 'GBP': return '£';

               default: return '$';
            }
        };
        default: return state;
    }
};
export const currencyName = (state = initialState.currencyName, action) => {
    switch(action.type){
        case CURRENT_CURRENCY_NAME: return action.currency;
        default: return state;
    }
};
export const cartOpen = (state = initialState.cartOpen, action) => {
    switch(action.type){
        case CART_OPEN: 
            return !state;
        default: return state;
    }
};
export const items = (state = initialState.items, action) => {
    switch(action.type){
        case GET_ITEMS: return action.value;
        default: return state;
    }
};
export const category = (state = initialState.category, action) => {
    switch(action.type){
        case GET_CATEGORY: { action.category = Array.from(action.category).map((i, idx) => idx === 0 ? i.toUpperCase() : i.toLowerCase()).join('')
            return action.category};
        default: return state;
    }
};
export const currentItem = (state = initialState.currentItem, action) => {
    switch(action.type){
        case GET_CURRENT_ITEM: return action.currentItem
        default: return state;
    }
};
export const cart = (state = initialState.cart, action) => {
    switch(action.type){
        case ADD_TO_CART: 
        if(state.length){
            if(state.find((i) => i.name===action.cart.name&&JSON.stringify(i.choosenSize.sort()) === JSON.stringify(action.cart.choosenSize.sort()))){
                let index = state.findIndex(i => i.name===action.cart.name&&JSON.stringify(i.choosenSize.sort()) === JSON.stringify(action.cart.choosenSize.sort()));
                action.cart = {...action.cart, countInCart: state[index].countInCart + action.cart.countInCart}
                state[index] = action.cart;
                return [...state];
            }
            return [...state, action.cart];
        }
        return [...state, action.cart];

        case REMOVE_FROM_CART: 
        if(state.length){
            if(state.find((i) => i.name===action.cart.name&&JSON.stringify(i.choosenSize.sort()) === JSON.stringify(action.cart.choosenSize.sort()))){
                let index = state.findIndex(i => i.name===action.cart.name&&JSON.stringify(i.choosenSize.sort()) === JSON.stringify(action.cart.choosenSize.sort()));
                if(state[index].countInCart > 1){ 
                    action.cart = {...action.cart, countInCart: state[index].countInCart-action.cart.countInCart}
                    state[index] = action.cart;
                    return [...state];
                }
                if(state[index].countInCart === 1){
                    state.splice(index, 1);
                    return [...state];
                }
            }
        }
        default: return state;
    }
};
export const goodsCount= (state = initialState.goodsCount, action) => {
    switch(action.type){
        case ADD_GOODS_COUNT: return ++state;
        case DEC_GOODS_COUNT: (state > 0)&&--state; 
        default: return state;
    }
};
export const total = (state = initialState.total, action) => {
    switch(action.type){
        case ADD_TOTAL_COUNT: return action.total;
        case DEC_TOTAL_COUNT: return (state >= action.total)&&state - action.total;
        default: return state;
    }
};
export const headerMenu = (state = initialState.headerMenu, action) => {
    switch(action.type){
        case SET_HEADER_MENU: return action.headerMenu[0];
        default: return state;
    }
};

// -------------Combiner--------------

export let reducers = combineReducers({
    currentPage,
    currencyArrow,
    currency,
    currencyName,
    cartOpen,
    items,
    category,
    currentItem,
    cart,
    goodsCount,
    total,
    headerMenu
});