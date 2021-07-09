import { PureComponent } from "react";

class CartStorage extends PureComponent{
    initCartStorage(){
        localStorage.clear();
        localStorage.setItem('cart', []);
        localStorage.setItem('currencyName', 'USD');
        localStorage.setItem('currency', '$');
        localStorage.setItem('shopCartButton__indicator', 0);
    }

    static addToLocalStorageCart(action){

        let arr = [];
        if(localStorage.cart){
            if(JSON.parse(localStorage.cart).find(
            i => i.name===action.name&&JSON.stringify(i.choosenSize.sort()) === JSON.stringify(action.choosenSize.sort())))
            {
                    let index = JSON.parse(localStorage.cart).findIndex(i => i.name===action.name&&JSON.stringify(i.choosenSize.sort()) === JSON.stringify(action.choosenSize.sort()));
                    action = {...action, countInCart: JSON.parse(localStorage.cart)[index].countInCart + action.countInCart};
                    arr = JSON.parse(localStorage.cart);
                    arr[index] = action;
                    return localStorage.setItem('cart', JSON.stringify(arr))
            }
            return localStorage.setItem('cart', JSON.stringify([...JSON.parse(localStorage.cart), action]));
        }
        return localStorage.setItem('cart', JSON.stringify([action]));
    };

    static removeFromLocalStorageCart(action){
        let arr = [];
        if(localStorage.cart.length){
            if(JSON.parse(localStorage.cart).find(
                i => i.name===action.name&&JSON.stringify(i.choosenSize.sort()) === JSON.stringify(action.choosenSize.sort())))
            {
                    let index = JSON.parse(localStorage.cart).findIndex(i => i.name===action.name&&JSON.stringify(i.choosenSize.sort()) === JSON.stringify(action.choosenSize.sort()));

                        if(JSON.parse(localStorage.cart)[index].countInCart === 1){
                            arr = JSON.parse(localStorage.cart);
                            arr.splice(index,1);
                            return localStorage.setItem('cart', JSON.stringify(arr));
                        }
                        if(JSON.parse(localStorage.cart)[index].countInCart > 1){
                            action = {...action, countInCart: JSON.parse(localStorage.cart)[index].countInCart - action.countInCart};
                            arr = JSON.parse(localStorage.cart);
                            arr[index] = action;
                            return localStorage.setItem('cart', JSON.stringify(arr))
                        }
            }
            return null;
        }
        return null;
    };

    static changeAttInCart(action, attributes){
        let arr = JSON.parse(localStorage.cart);
        let index = arr.findIndex((i, idx) => i.name===action.name&&idx ===attributes[2]);

        arr[index].choosenSize.map(att => att[0] === attributes[0]&&(att[1]=attributes[1]));
        return localStorage.setItem('cart', JSON.stringify(arr))
    };

    static addShopCartButton__indicator(){
        let count;
        if(localStorage.cart){
            count = JSON.parse(localStorage.cart).reduce((summ, i) => summ += i.countInCart, 0)
            return localStorage.setItem('shopCartButton__indicator', count)
        }
    }

    render(){
        // this.initCartStorage();

        return(
            <>
            </>
        )
    }
}
export default CartStorage;