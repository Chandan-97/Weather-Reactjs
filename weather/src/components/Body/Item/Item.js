import React from "react";
import "../../style.css";

class Item extends React.Component {
  render() {
    let item = this.props.item;
    let desc = {
      date: item.date_txt,
      time: item.dt_txt.split(" ")[1],
      description:
        item.weather[0].main.charAt(0).toUpperCase() +
        item.weather[0].main.slice(1),
      min_temp: item.main.temp_min.toString(),
      max_temp: item.main.temp_max.toString(),
      icon: `http://openweathermap.org/img/wn/${item.weather[0].icon.slice(
        0,
        -1
      ) + "d"}@2x.png`,
      detail:
        item.weather[0].description.charAt(0).toUpperCase() +
        item.weather[0].description.slice(1),
      humidity: item.main.humidity
    };
    console.log(desc.icon);
    if (desc.min_temp.indexOf(".") != -1) {
      if (desc.min_temp.split(".")[1].length == 1) desc.min_temp += "0";
    } else {
      desc.min_temp += ".00";
    }

    if (desc.max_temp.indexOf(".") != -1) {
      if (desc.max_temp.split(".")[1].length == 1) desc.max_temp += "0";
    } else {
      desc.min_temp += ".00";
    }

    if (desc.time.split(":")[0] < 12) {
      if (desc.time.split(":")[0] < 10) {
        desc.time = desc.time.split(":")[0].substring(1);
      }
      if (desc.time.split(":")[0] == 0)
        desc.time = desc.time.split(":")[0] + "  Hours";
      else desc.time = desc.time.split(":")[0] + "  O'Clock";
    } else {
      desc.time = desc.time.split(":")[0] + "  O'Clock";
    }

    return (
      <main>
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-11">
                <div className="row">
                  <div className="col-3 div-center-text">
                    <img
                      src={desc.icon}
                      alt={desc.description}
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-7">
                    <div className="row">
                      <div className="col-12 div-center-text display-5">
                        <span>{desc.description}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 div-center-text small-fade-text">
                        {desc.detail}
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="div-center-text temperature_text">
                      {desc.max_temp}&#730;
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <div className="row div-center-text">{desc.date}</div>
                    <div className="row div-center-text">{desc.time}</div>
                  </div>
                  <div className="col-7 div-center-text">
                    Humidity {desc.humidity}
                  </div>
                  <div className="col-2 div-center-text temperature_text">
                    <div>{desc.min_temp}&#730;</div>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <i class="fa fa-thermometer-quarter" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </main>
    );
  }
}

export default Item;
