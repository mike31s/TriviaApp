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

        var output = (
            <div>
                <div className="ui card ui center aligned segment" id="randomQuestionCard">
                    <h1 className="center"><i className="help icon center"></i></h1>
                    <h3>Random Question</h3>

                <div className="ui button">
                    Ask Away!</div>
                <div className="ui modal">
                    <div className="content">
                        <h1>Question: {q}</h1>
                        <h2>Category: {category}</h2>


                        <div className="ui form">
                            <div className="grouped fields">
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="example2" id="100" />
                                        <label htmlFor="100">{answerArray[0]}</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="example2" id="101" />
                                        <label htmlFor="101">{answerArray[1]}k</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="example2" id="102" />
                                        <label htmlFor="102">{answerArray[2]}</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="example2" id="103" />
                                        <label htmlFor="103">{answerArray[3]}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        );

        return output;
    }
}