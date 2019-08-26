import React from 'react';
import "../style.css";
import Item from './Item/Item';
import BodyTab from './BodyTab/BodyTab'

class Body extends React.Component{
    
    render(){
        let res =  this.props.weatherData ? this.props.weatherData.list ? this.props.weatherData.list : [] : [];
        let today = new Date();
        
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        if((month.toString().length) == 1){ month = "0" + month;}
        if((date.toString().length) == 1) {date = "0" + date;};

        today = year +"-"+ month +"-"+ date;
        const todays = res.map(function(itemComponent){
            if(itemComponent.dt_txt.split(" ")[0] == today){
                itemComponent.date_txt = "Today"
                return (
                    <Item item={itemComponent}/>
                )
            }
        })
        const tommorows = res.map(function(itemComponent){
            if(itemComponent.dt_txt.split(" ")[0] != today) {
                // itemComponent.date_txt = itemComponent.dt_txt.split(" ")[0]
                let date_str = itemComponent.dt_txt.split(" ")[0]
                itemComponent.date_txt = date_str.split("-")[2] + " / " + date_str.split("-")[1] + " / " + date_str.split("-")[0]
                return (
                    <Item item={itemComponent}/>
                )
            }
        })
        
        return(
            <div>
                <BodyTab/>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        {todays}
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        {tommorows}
                    </div>
                </div>
            </div>
        )
    }
}

export default Body