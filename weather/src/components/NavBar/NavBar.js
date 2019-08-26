import React from "react";
import "../style.css";

class NavBar extends React.Component {
  state = {
    search: ""
  };

  search = () => {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.search},in&units=metric&APPID=7e167cdde35fbdcf7ae49c5681070880`;
    console.log(url);
    fetch(url, { mode: "cors" })
      .then(res => res.json())
      .then(
        data => {
          this.props.getData(data);
        },
        err => {
          console.log(err);
        }
      );
  };

  render() {
    return (
      <div class="form-group input-group">
        <input
          type="text"
          class="form-control"
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
        />
        <span class="input-group-btn">
          <button onClick={this.search} type="button" class="btn btn-default">
            <i class="fa fa-search"></i>
          </button>
        </span>
      </div>
    );
  }
}

export default NavBar;
