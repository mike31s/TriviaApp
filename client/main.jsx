import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http'
import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';

import './main.html';
//import TodaysPlan from './div2.jsx';
import Question from './question.jsx'


var helloMsg = (<div><h1>Hello</h1>
    <ul>,
        <li>item one</li>
        <li>item 2</li>
    </ul>
</div>);

///////////


var friends = [
    {
        title: "Yummmmmmm",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys!  Wait Up!",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
    }
];

// New component class starts here:
// New component class starts here:
class Friend extends Component{
    render () {

        var friend = friends[1];

        return (
            <div>
                <h1>{friend.title}</h1>
                <img src={friend.src} className = "resize"/>
            </div>
        );
    }
}

/*
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://opentdb.com/api.php?amount=1", false);
xhr.send();

var obj = JSON.parse(xhr.response);
console.log(obj);
console.log("*******");
console.log(obj.results[0].question);


var x = (<h1>{xhr.status}</h1>);


*/
Meteor.startup(() => {
        render(<Question />, document.getElementById('myResponse'));
        render(helloMsg, document.getElementById('tomato'));
    render(<Friend />, document.getElementById('testDiv'));
});
