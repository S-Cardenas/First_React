var React = require('react');
var ReactDOM = require('react-dom');

var Tabs = React.createClass({
  getInitialState: function() {
    return { selectedIndex: 0};
  },
  select: function (idx) {
    this.setState({selectedIndex: idx});
  },
  render: function() {
    var nameListItems = this.props.tabs.map(function(tab, idx) {
      return (
        <li key={idx} onClick={this.select.bind(this, idx)}>
          <h1 className={this.state.selectedIndex === idx ? "selected" : ""}>
            {tab.title}
          </h1><br />
          <article>{tab.content}</article>
        </li>);
    }.bind(this));

    return (
      <ul className="tabs">
        {nameListItems}
      </ul>);
  }

});

module.exports = Tabs;
