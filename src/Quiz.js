import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Questions from './questions.json'
import './Quiz.css';
import './Mainpage.css';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_index: this.setQuizIndex(),
            question_index: 0
        }
        this.changeQuestion = this.changeQuestion.bind(this);
    }

    changeQuestion() {
        if (this.state.question_index !== (Questions.quizes[this.state.quiz_index].questions.length - 1)) {
            this.setState({
                question_index: this.state.question_index + 1
            });
            ReactDOM.render(
                <Quiz />,
                document.getElementById('root')
            );
        } else {
            window.location.assign('http://localhost:3000/result');
        }
    }

    setQuizIndex() {
        return Math.floor(Math.random() * (Questions.quizes.length + 1))
    }

    render() {
        return (
            <div className="mainpage question">
                <p>{Questions.quizes[this.state.quiz_index].questions[this.state.question_index].question}</p>
                {
                    Questions.quizes[this.state.quiz_index].questions[this.state.question_index].answers.map((answer, answer_index) => (
                        <Button className="mainpage-button button-yellow question-button" text={answer} onClick={this.changeQuestion} key={answer_index} />
                    ))
                }
            </div>
        );
    }
}

export default Quiz;