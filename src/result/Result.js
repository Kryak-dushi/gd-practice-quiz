import Button from '../button/Button';
import '../mainpage/Mainpage.css';
import '../quiz/Quiz.css';
import '../content/Content.css';
import '../button/Button.css'
import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correct_answers: props.correct_answers,
            theme: props.theme,
            date: new Date()
        };
        this.goToMainpage.bind(this);
        this.goToHistory.bind(this);
    }

    goToMainpage() {
        window.location.assign('http://localhost:3000/index');
    }

    goToHistory() {
        window.location.assign('http://localhost:3000/history');
    }

    scoreText() {
        if (this.state.correct_answers === 1) return 'балл'
        else if (this.state.correct_answers > 1 && this.state.correct_answers < 5) return 'балла'
        else return 'баллов'
    }

    saveResult() {
        let games = [];

        if (localStorage.getItem('games') !== null && localStorage.getItem('games') !== undefined) {
            games = JSON.parse(localStorage.getItem('games'));
        }
        games.push({
            id: games.length + 1,
            date: new Date(),
            theme: this.state.theme,
            correctAnswers: this.state.correct_answers
        });
        localStorage.setItem('games', JSON.stringify(games));
    }

    render() {
        this.saveResult();
        return (
            <div className="mainpage quiz">
                <p>Вы набрали {this.state.correct_answers} {this.scoreText()} из 10</p>
                <div className="content__button-container">
                    <Button className="button button_red" text='Главная' onClick={this.goToMainpage} />
                    <Button className="button button_yellow" text='История' onClick={this.goToHistory} />
                </div>
            </div>
        );
    }
}

export default Result;
