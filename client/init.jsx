import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html';
import Question from './question.jsx'

$(document).ready(function() {


    document.getElementById("randomQuestionCard").onclick = function(){
        render(<Question />, document.getElementById('questionModalContent'));

        $('#questionModalxxx').modal('setting', 'transition', 'horizontal flip').modal('show');
        $('.ui.embed').embed({
            autoplay: true
        });


      /*  $('#confirmButton').click(function() {
            buttons = ['#100', '#101', '#102', '#103']

            for (var i = 0; i < buttons.length; i++) {
                Question.checkAnswer(i)

                if($(buttons[i]).is(':checked')) { alert("it's checked -----> " + buttons[i]); }
            }
        });*/
    };



    $('.ui.dropdown')
        .dropdown();


});