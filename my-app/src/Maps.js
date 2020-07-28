import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Polygon } from 'google-maps-react';
import { computeArea } from 'spherical-geometry-js';
import Axios from 'axios';
var apiKey;

const mapStyles = {
    width: '100%',
    height: '50%',
  };

export class Maps extends Component {
    constructor(props) {
      super(props);
      this.state ={ timetaken: 0};
      apiKey = this.props.GoogleApiKey;
    }
  
    displayMarkers = () => {
      if(this.props.locations.length > 0)
        return <Polygon paths={this.props.locations} fillColor = 'red'/>
    }

    computeAreaOfTriangle = () => {
      if(this.props.locations.length > 0 && this.props.routes.length > 0)
      {
        Axios.get('http://dev.virtualearth.net/REST/V1/Routes/Walking?waypoint.0='+this.props.routes[0].lat+','+this.props.routes[0].lng+'&wp.1='+this.props.routes[1]+'&wp.2='+this.props.routes[2]+'waypoint.3='+this.props.routes[0].lat+','+this.props.routes[0].lng+'&optmz=distance&output=json&durationUnit=Hour&key='+this.props.BingApiKey).then((res) => {
          this.setState({timetaken: parseFloat(res.data.resourceSets[0].resources[0].travelDuration) / 60})
        })
        return(<div>
               <h3> Task1:  </h3>
               <h1>Area of the rectangle is: {computeArea(this.props.locations)} meters</h1>
               <h1> Total time taken {this.state.timetaken} min </h1> </div> );
      }
    }
  
    render() {
      return (
        <div style={{display:"inline"}}>
        <div style={{display:'inline-flex'}}>
            {this.computeAreaOfTriangle()}
          </div>
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{ lat: this.props.initialLat , lng: this.props.initialLng}}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: apiKey
  })(Maps);