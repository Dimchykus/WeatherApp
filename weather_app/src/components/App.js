import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import {setItem} from "../actions/weather";
const api = {
    key:"5cd66aa98df41dded9c26061435ff900",
    base:"https://openweathermap.org/data/2.5/weather"
}


class App extends React.Component{

    componentWillMount() {
        const {setItem} = this.props;
        const query = "Lviv"
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${api.key}`)
            .then(res => res.json())
            .then(res => {setItem(res)
                console.log(res)
            })
       // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${api.key}`);
       //  //http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5cd66aa98df41dded9c26061435ff900
       //  const data = await response.json();
       //  console.log(data);
       //  console.log("data");
    }

    render(){


        return(
            <div>
                <p>Weather</p>
                <input type="text" placeholder="country"/>
                <input type="text" placeholder="city"/>
                <button>weather1</button>
                <button>weather2</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.weather_reducer.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItem: products => dispatch(setItem(products)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
