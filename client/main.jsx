import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http'
import 'whatwg-fetch';

import './main.html';
import Question from './question.jsx'


var helloMsg = (<div><h1>Hello</h1>
    <ul>,
        <li>item one</li>
        <li>item 2</li>
    </ul>
</div>);

///////////


Meteor.startup(() => {
  //      render(helloMsg, document.getElementById('tomato'));
});
