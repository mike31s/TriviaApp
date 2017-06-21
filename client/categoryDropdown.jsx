import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html';


class CategoryDropdown extends Component{
    handleClick() {
        for (var speech = '', i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }

    render() {
        return
        <div className="ui selection dropdown">
            <input type="hidden" name="gender" />
                <i className="dropdown icon"></i>
                <div className="default text">Gender</div>
                <div className="menu">
                    <div className="item" data-value="1">Male</div>
                    <div className="item" data-value="0">Female</div>
                </div>
        </div>;
    }
};





Meteor.startup(() => {
    //render(<CategoryDropdown />, document.getElementById('categoryDropdownDiv'));
});