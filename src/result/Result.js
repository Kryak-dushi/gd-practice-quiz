import Button from '../button/Button'
import '../mainpage/Mainpage.css';
import '../quiz/Quiz.css';
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
                <div className="mainpage__button-container">
                    <Button className="button button_red" text='ЕЩЁ РАЗ' onClick={() => { window.location.assign('http://localhost:3000/quiz') }} />
                    <Button className="button button_yellow" text='ИСТОРИЯ' onClick={() => { window.location.assign('http://localhost:3000/history') }} />
                    <Button className="button button_red" text='ГЛАВНАЯ' onClick={() => { window.location.assign('http://localhost:3000/index') }} />
                </div>
            </div>
        );
    }
}

export default Result;
