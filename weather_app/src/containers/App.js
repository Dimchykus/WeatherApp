import App from "./../components/App"
import {setItems} from"./../actions/weather"

const mapStateToProps = (state) => {
    return {
        //products: state.reducer.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItems: products => dispatch(setItems(products)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);