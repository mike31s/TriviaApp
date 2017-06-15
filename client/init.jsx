import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Question from './question.jsx'
import './main.html';

$(document).ready(function() {

    document.getElementById("randomQuestionCard").onclick = function(){
        render(<Question />, document.getElementById('questionModalContent'));

        $('.ui.modal').modal('show');
        $('.ui.embed').embed({
            autoplay: true
        });
    };





});