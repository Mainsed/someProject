import Bucket from '../Components/Bucket'
import {decAmount, incAmount, changeBucketState} from '../Redux/SaleReducer'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        products: state.sales.products,
    }
}
const BucketContainer = connect(mapStateToProps, {incAmount, decAmount, changeBucketState})(Bucket)

export default BucketContainer;