import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React, { Component } from 'react';

export default class ChkBtn extends Component{

    checkAnswer(correctLocation){
        $('#confirmButton').click(function() {
            buttons = ['#100', '#101', '#102', '#103'];

            for (var i = 0; i < buttons.length; i++) {
                if(($(buttons[i]).is(':checked')) &&( i == correctLocation)){
                //CORRECT ANSWER
                       alert("CORRECT----> " + buttons[i]);
                }
            }
            $('#questionModalxxx')
                .modal('toggle');
        });
    }
    render(){
        var correct = this.props.answer;
        var correctLocation = this.props.answerLocation;

        var output = (
            <div style={{float: 'right'}}>
                <h3> the answer is  {correct} at {correctLocation}</h3>
            <button className="ui blue button" id="confirmButton" onClick={this.checkAnswer(correctLocation)}>Confirm</button>
        </div>);
        return output;
    }
}