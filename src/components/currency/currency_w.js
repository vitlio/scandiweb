import { connect } from "react-redux";
import Currency from "./currency";
import { currencyArrowAC } from "../../store/actionCreators/currencyArrowAC";
import { currentCurrencyAC } from "../../store/actionCreators/currentCurrencyAC";
import { currentCurrencyNameAC } from "../../store/actionCreators/currentCurrencyNameAC";

function mapStateToProps() {
  return (state) => {
    return {
        currency: state.currency,
    };
  };
}
function mapDispatchToProps() {
  return (dispatch) => {
    return {
        changeCurrentCurrencyName: (value) => {
          return dispatch(currentCurrencyNameAC(value));
        },
        changeCurrentCurrency: (value) => {
          dispatch(currencyArrowAC());
          return dispatch(currentCurrencyAC(value));
        },
      };

    }
}

const CURRENCY_W = connect(mapStateToProps, mapDispatchToProps)(Currency);

export default CURRENCY_W;