import Shop from '../Components/Shop'
import {changeBucketState} from '../Redux/SaleReducer'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        products: state.sales.products,
    }
}
const ShopContainer = connect(mapStateToProps, {changeBucketState})(Shop)

export default ShopContainer;