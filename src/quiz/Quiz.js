import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/Button';
import Questions from './Quiz.json'
import '../mainpage/Mainpage.css';
import './Quiz.css';
import Result from '../result/Result';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_index: this.setQuizIndex(),
            question_index: 0,
            correct_answers: 0
        }
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    setQuizIndex() {
        return Math.floor(Math.random() * (Questions.quizes.length))
    }

    changeQuestion(answer) {
        this.checkAnswer(answer);

        if (this.state.question_index !== (Questions.quizes[this.state.quiz_index].questions.length - 1)) {
            this.setState({
                question_index: this.state.question_index + 1
            });
            ReactDOM.render(
                <Quiz />,
                document.getElementById('root')
            );
        } else {
            ReactDOM.render(
                <Result correct_answers={this.state.correct_answers} />,
                document.getElementById('root')
            );
        }
    }

    checkAnswer(answer) {
        if (answer === Questions.quizes[this.state.quiz_index].questions[this.state.question_index].correctAnswer) {
            this.setState({
                correct_answers: (this.state.correct_answers + 1)
            })
        }
    }

    render() {
        return (
            <div className="mainpage quiz">
                <h1 className="quiz__theme-text">{Questions.quizes[this.state.quiz_index].theme}</h1>
                <p>{Questions.quizes[this.state.quiz_index].questions[this.state.question_index].question}</p>
                {Questions.quizes[this.state.quiz_index].questions[this.state.question_index].answers.map((answer, answer_index) => (
                    <Button className="button button_yellow quiz__button" text={answer} onClick={this.changeQuestion.bind(this, answer)} key={answer_index} />
                ))}
            </div>
        );
    }
}

export default Quiz;