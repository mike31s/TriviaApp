import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html';

var green = '#39D1B4';
var yellow = '#FFD712';

var Toggle = React.createClass({
    getInitialState () {
        return {color: green};
    }

,

    changeColor () {
        var color = this.state.color == green ? yellow : green;
        this.setState({color: color});
    }

,

    render () {
        return (
            <div style={{background: this.state.color}}>
                <h1>
                    Change my color
                </h1>
                <button onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
});

Meteor.startup(() => {
    render(<Toggle />, document.getElementById('toggleDiv'));
});