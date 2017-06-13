import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React, { Component } from 'react';



export default class Question extends Component{
    render () {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://opentdb.com/api.php?amount=1&type=multiple", false);
        xhr.send();

        var obj = JSON.parse(xhr.response);


        ////////////////////////////////

        var q = obj.results[0].question;
        q= q.replace(/&quot;/g, "\"");
        q= q.replace(/&#039;/g, "\'");
        var category = obj.results[0].category;
        var correct = obj.results[0].correct_answer;
        var incorrect = [obj.results[0].incorrect_answers[0],obj.results[0].incorrect_answers[1],obj.results[0].incorrect_answers[2]];



        var correctPosition = Math.floor(Math.random() * (3-0+1));
        var answerArray = incorrect;
        answerArray.splice(correctPosition, 0, correct);

        var output = (<div>
         <h1>Question: {q}</h1>
         <h2>Category: {category}</h2>
         <ul>
          <li>{answerArray[0]}</li>
          <li>{answerArray[1]}</li>
          <li>{answerArray[2]}</li>
          <li>{answerArray[3]}</li>
         </ul>

        </div>);

        return output;
    }
}