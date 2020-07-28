import React, { Component } from 'react';
import axios from 'axios'
import Maps from './Maps'
import BingMap from './BingMap'
const url1 = 'https://developers.zomato.com/api/v2.1/geocode?';
const ZomatoApiKey = 'YOUR_API_KEY'
const BingApiKey = 'YOUR_API_KEY'
const GoogleApiKey = 'YOUR_API_KEY'
var arrGoogle = [];
var arrBing = [];

class Restaurants extends Component{
    constructor(props) 
    {
        super(props);
        this.state = { Currlat: 0,
        Currlong: 0,
        nearby: [],
        triangleGoogle : [],
        triangleBing: [] };
        this.setLatLong = this.setLatLong.bind(this);
    }

    componentDidMount()
    {
        if ("geolocation" in navigator) 
        {
            console.log("Available");
            navigator.geolocation.getCurrentPosition(this.setLatLong);
           
        } 
        else 
        {
            console.log("Not Available");
            window.alert("browser not supported");
        }
    }

    setLatLong(position)
    {
        this.setState({Currlat: position.coords.latitude});
        this.setState({Currlong: position.coords.longitude});
        const config = { headers: {'user-key': ZomatoApiKey} }; 
        axios.get(url1 + 'lat='+this.state.Currlat+'&lon='+this.state.Currlong,config).then((res) =>{
            this.setState({nearby: res.data.nearby_restaurants});
            arrGoogle.push({lat:this.state.Currlat, lng:this.state.Currlong});
            arrGoogle.push({lat:parseFloat(res.data.nearby_restaurants[0].restaurant.location.latitude), lng:parseFloat(res.data.nearby_restaurants[0].restaurant.location.longitude)});
            arrGoogle.push({lat:parseFloat(res.data.nearby_restaurants[this.state.nearby.length - 1].restaurant.location.latitude), lng:parseFloat(res.data.nearby_restaurants[this.state.nearby.length - 1].restaurant.location.longitude)});

            arrBing.push({lat:this.state.Currlat, lng:this.state.Currlong});
            arrBing.push(res.data.nearby_restaurants[0].restaurant.location.address);
            arrBing.push(res.data.nearby_restaurants[this.state.nearby.length - 1].restaurant.location.address);
            
            this.setState({triangleGoogle: arrGoogle});
            this.setState({triangleBing: arrBing});
        });
    }

    renderBingMap = () => {
        if(this.state.triangleBing.length > 0)
        {
            return <BingMap BingApiKey = {BingApiKey} locations = {this.state.triangleBing}  initialLat = {this.state.Currlat} initialLng = {this.state.Currlong}/>
        }
    }

    render(){
        return(
        <div>
            <Maps BingApiKey = {BingApiKey} GoogleApiKey = {GoogleApiKey} locations = {this.state.triangleGoogle} routes = {this.state.triangleBing} initialLat = {this.state.Currlat} initialLng = {this.state.Currlong}/>
            {this.renderBingMap()}
        </div>);
    }
}

export default Restaurants;