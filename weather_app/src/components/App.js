import React from 'react';
import '../App.css';
import axios from "axios"
class App extends React.Component{

    componentWillMount() {
        const {setItems} = this.props;
        axios.get('https://community-open-weather-map.p.rapidapi.com/weather').then(({data}) => {
            setItems(data);
        })
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


export default App;
