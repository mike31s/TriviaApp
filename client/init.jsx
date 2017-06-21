import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html';
import Question from './question.jsx'

$(document).ready(function() {


    document.getElementById("randomQuestionCard").onclick = function(){
        render(<Question />, document.getElementById('questionModalContent'));

        $('#questionModalxxx').modal('show');
        $('.ui.embed').embed({
            autoplay: true
        });
    };

    $('.ui.dropdown')
        .dropdown();


});