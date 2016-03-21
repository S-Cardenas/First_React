var React = require('react');
var ReactDOM = require('react-dom');


var Clock = React.createClass({
  getInitialState: function() {
    return {time: new Date()};
  },

  tick: function() {
    this.setState({time: new Date()});
  },

  componentDidMount: function() {
    this.intervalID = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.intervalID);
  },
  render: function() {
    return (
      <h2>{this.state.time.toString()}</h2>
    );
  }

});

var Weather = React.createClass({
  getInitialState: function () {
    return {weather: 0, temp: undefined};
  },

  getWeather: function(pos) {
    var xmlhttp = new XMLHttpRequest();
    var lat = Math.floor(pos.coords.latitude);
    var lon = Math.floor(pos.coords.longitude);
    // lat = 30;
    // lon = 30;
    var call = "http://api.openweathermap.org/data/2.5/weather?";
    call += "lat=" + lat + "&lon=" + lon;
    // call += "weather?q=NY,NY";
    call += "&APPID=bcb83c4b54aee8418983c2aff3073b3b";
    var result;
    xmlhttp.onreadystatechange = function() {

      if (xmlhttp.readyState == XMLHttpRequest.DONE){
        result = JSON.parse(xmlhttp.responseText);
        var w = result.weather[0].main + ": " + result.weather[0].description;
        var t = (result.main.temp - 273).toFixed(2) + " C";
        this.setState({weather: w, temp: t});
      }
    }.bind(this);
    xmlhttp.open("GET", call, true);
    xmlhttp.send();
  },

  componentDidMount: function () {

    navigator.geolocation.getCurrentPosition(function(pos) {
      this.getWeather(pos);
    }.bind(this), function () {
    });

  },

  render: function () {
    var currentWeather = this.state.weather === 0 ? "" : this.state.weather;
    var currentTemp = this.state.temp === undefined ? "" : this.state.temp;
    return (
      <div className="weather">
      <p>{currentWeather}</p>
      <p>{currentTemp}</p>
      </div>
    );
  }
});








module.exports = {Clock: Clock, Weather: Weather};
