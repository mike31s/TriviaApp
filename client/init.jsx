import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Question from './question.jsx'
import './main.html';

$(document).ready(function() {

    $('.ui.button').click(function() {
        render(<Question />, document.getElementById('questionModalContent'));

        $('.ui.modal').modal('show');
        $('.ui.embed').embed({
            autoplay: true
        });
    });



});