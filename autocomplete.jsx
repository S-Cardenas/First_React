var React = require('react');
var ReactDOM = require('react-dom');

var AutoComplete = React.createClass({
  getInitialState: function () {
    return { input: "" };
  },
  handleChange: function (e) {
    this.setState({ input: e.target.value });
  },
  clickHandler: function (name) {
    this.setState({ input: name });
  },
  render: function () {
    return (
      <ul>
      <input
        type="text"
        value={this.state.input}
        onChange={this.handleChange}
      />
      {
        this.props.names.map(function (name, index) {
          if (this.state.input !== "" && name.match(this.state.input)) {
            return <li key={index} onClick={this.setState.bind(this, name)}>{name}</li>;
          }
        }.bind(this))
      }
      </ul>
    );
  }

});




module.exports = AutoComplete;
