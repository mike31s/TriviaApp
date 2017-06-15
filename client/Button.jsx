import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React, { Component } from 'react';

export default class Button extends Component{
    getDefaultProps () {
        return {name: 'Default'};
    }

        render () {

        return <button onClick={this.props.onClick}>
            {this.props.name}
        </button>;
    }
}