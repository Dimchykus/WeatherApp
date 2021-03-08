import React from 'react';
import '../App.css';
import axios from "axios"
const api = {
    key:"5cd66aa98df41dded9c26061435ff900",
    base:"https://openweathermap.org/data/2.5/weather"
}

class App extends React.Component{

    async GetWeather() {
        const query = "Lviv"
        // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         this.props.setItems(res)
        //         console.log(res)
        //     })
       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${api.key}`);
        //http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5cd66aa98df41dded9c26061435ff900
        const data = await response.json();
        console.log(data);
        console.log("data");
    }

    render(){
this.GetWeather()

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
