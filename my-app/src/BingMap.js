import React, {Component} from 'react';
import { ReactBingmaps } from 'react-bingmaps';

class BingMap extends Component{

    renderMapWhenPropsRecieved = () =>{
        if(this.props.locations.length > 0)
        { 
            return (<div style={{height:'500px',marginTop:'30%'}}>
            <h3> Tasks 2: </h3>
            <h1> time taken and routes given below.. </h1>
            <ReactBingmaps
            bingmapKey = {this.props.BingApiKey} 
            center = {[this.props.initialLat, this.props.initialLng]}
            zoom = {12}
            directions = {{
                "renderOptions": {"itineraryContainer": "itineraryContainer" },
                "requestOptions": {"routeMode": "walking", "maxRoutes": 2},
                "wayPoints": [
                      {
                        location: [this.props.initialLat, this.props.initialLng]
                      },
                      {
                        address: this.props.locations[1]
                      },
                      {
                        address: this.props.locations[2]
                      },
                      {
                        location: [this.props.initialLat, this.props.initialLng]
                      }
                    ]
              }
            }
          
            > 
            </ReactBingmaps>
            <div className="direction-container">
          <div className="input-panel" id='inputPanel'></div>
          <div className="itinerary-container" id='itineraryContainer'></div>
        </div>
        </div>)
        }
    }

    render(){
        return(
           <div>
            {this.renderMapWhenPropsRecieved()}
          </div>
    );
    }
}

export default BingMap;