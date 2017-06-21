import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html';


class DifficultyDropdown extends Component{
    handleClick() {
        for (var speech = '', i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }

    render() {
        return (
            <div className="ui selection dropdown">
                <input type="hidden" name="category" />
                <i className="dropdown icon"></i>
                <div className="default text">Any Difficulty</div>
                <div className="menu">
                    <div className="item" data-value="0">Any Difficulty</div>
                    <div className="item" data-value="1">Easy</div>
                    <div className="item" data-value="2">Medium</div>
                    <div className="item" data-value="3">Hard</div>
                </div>
            </div>
        );
    }
};


Meteor.startup(() => {
    render(<DifficultyDropdown />, document.getElementById('difficultyDropdownDiv'));
});