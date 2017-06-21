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
        return (
            <div className="ui selection dropdown" id="categoryDropdownxxx">
                <input type="hidden" name="category" />
                <i className="dropdown icon"></i>
                <div className="default text">Random</div>
                <div className="menu">
                    <div className="item" data-value="0">Random</div>
                    <div className="item" data-value="1">General Knowledge</div>
                    <div className="item" data-value="14">History</div>
                    <div className="item" data-value="11">Geography</div>
                    <div className="item" data-value="2">Books</div>
                    <div className="item" data-value="3">Film</div>
                    <div className="item" data-value="4">Music</div>
                    <div className="item" data-value="5">Television</div>
                    <div className="item" data-value="6">Video Games</div>
                    <div className="item" data-value="7">Science and Nature</div>
                    <div className="item" data-value="8">Science and Computers</div>
                    <div className="item" data-value="10">Mythology</div>
                    <div className="item" data-value="12">Politics</div>
                    <div className="item" data-value="13">Celebrities</div>
                </div>
            </div>
        );
    }
};


Meteor.startup(() => {
    render(<CategoryDropdown />, document.getElementById('categoryDropdownDiv'));
});