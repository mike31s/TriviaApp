import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React, { Component } from 'react';
import ChkBtn from './ChkBtn.jsx';



export default class Question extends Component{

    getCategory(){
        var result;
        switch ($('#categoryDropdownxxx')[0].innerText){
            case "Random":
                result = "any";
                break;
            case "Books":
                result = "10";
                break;
            case "Film":
                result = "11";
                break;
            case "Music":
                result = "12";
                break;
            case "Television":
                result = "14";
                break;
            case "Video Games":
                result = "15";
                break;
            case "Science and Computers":
                result = "18";
                break;
            case "Science and Nature":
                result = "17";
                break;
            case "Mythology":
                result = "20";
                break;
            case "Geography":
                result = "22";
                break;
            case "Politics":
                result = "24";
                break;
            case "Celebrities":
                result = "26";
                break;
            case "History":
                result = "23";
                break;
            case "General Knowledge":
                result = "9";
                break;
            default:
                result = "9";
        }
        return result;
    }
    getDifficulty() {
        var result = $('#difficultyDropdownxxx')[0].innerText;
        if (result === "Any Difficulty")
            return 'any'
        else
            return result.toLowerCase();
    }
    buildAPIrequest(){
        var difficulty = this.getDifficulty();
        var cat = this.getCategory();
        var output;
        //both are defined
        if ((difficulty != 'any') &&(cat!= 'any'))
            output = 'https://opentdb.com/api.php?amount=1&category=' + cat + '&difficulty=' + difficulty+ '&type=multiple';
        //diff is any but cat is defined
         else if ((cat != 'any') && (difficulty === 'any'))
            output = 'https://opentdb.com/api.php?amount=1&category=' + cat + '&type=multiple';
        //diff is defined but cat is any
        else if ((difficulty != 'any') &&(cat === 'any') )
            output = 'https://opentdb.com/api.php?amount=1&difficulty=' + difficulty + '&type=multiple';

        else output = 'https://opentdb.com/api.php?amount=1&type=multiple';

        console.log(output);
        return output;
        //https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple
        //https://opentdb.com/api.php?amount=1&type=multiple
        //https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple
    }




    render () {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.buildAPIrequest(), false);
        xhr.send();

        var obj = JSON.parse(xhr.response);
        ////////////////////////////////

   //     console.log(this.getCategory());
   //     console.log(this.getDifficulty());
        //console.log($('#categoryDropdownxxx')[0].innerText);

        ////////////////////////////////

        var q = obj.results[0].question;
        q= q.replace(/&quot;/g, "\"");
        q= q.replace(/&#039;/g, "\'");
        var category = obj.results[0].category;
        var difficulty = obj.results[0].difficulty;
        var correct = obj.results[0].correct_answer;
        var incorrect = [obj.results[0].incorrect_answers[0],obj.results[0].incorrect_answers[1],obj.results[0].incorrect_answers[2]];

        //Put Correct answer in Random position
        var correctPosition = Math.floor(Math.random() * (3-0+1));
        var answerArray = incorrect;
        answerArray.splice(correctPosition, 0, correct);



        //render the output
        var output = (
            <div>
                <div className="content">
                    <h1>Question: {q}</h1>
                    <h2>Category: {category}</h2>
                    <h2>Difficulty: {difficulty}</h2>

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
                    <ChkBtn answerLocation = {correctPosition} answer = {correct}/>
                </div>
            </div>
        );

        //set correct
       // this.checkAnswer(correctPosition);

        return output;
    }
}