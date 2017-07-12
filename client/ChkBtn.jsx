import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React, { Component } from 'react';

export default class ChkBtn extends Component{

    checkAnswer(n){
        console.log ("Guessed: " + (n+1));

        $('#confirmButton').click(function() {
            buttons = ['#100', '#101', '#102', '#103'];

            for (var i = 0; i < buttons.length; i++) {
                if(($(buttons[i]).is(':checked')) &&( i == n)){
                    alert("CORRECT----> " + buttons[i]);
                }
            }
        });
    }
    render(){
        var correct = this.props.answer;
        var correctLocation = this.props.answerLocation;

        var output = (
            <div style={{float: 'right'}}>
                <h3> the answer is  {correct} at {correctLocation}</h3>
            <button className="ui blue button" id="confirmButton" >Confirm</button>
        </div>);
        return output;
    }
}