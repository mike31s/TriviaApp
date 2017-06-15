import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html';
import Button from './Button.jsx'


class Talker extends Component{
    handleClick() {
        for (var speech = '', i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }

    render() {
        return <Button onClick={this.handleClick} name="I am Button"/>;
    }
};





Meteor.startup(() => {
    render(<Talker />, document.getElementById('talkerDiv'));
});