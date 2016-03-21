var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var Clock = require('./weatherclock').Clock;
var Weather = require('./weatherclock').Weather;
var AutoComplete = require('./autocomplete.jsx');

var Widgets = React.createClass({

  sampleTabs: function() {
    return [
      {title: "First Title", content: "I hope this works."},
      {title: "2nd Title", content: "I hope this also works."}
    ];
  },

  render: function () {
    return (
      <div>
        <Tabs tabs={this.sampleTabs()} />
        <Clock />
        <Weather />
        <AutoComplete names={['Stefan', 'Steven', 'Gautham', 'Godric', 'Gotham']}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
