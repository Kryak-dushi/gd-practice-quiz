import './Quiz.css';
import './Mainpage.css';
import Button from './Button';
import Questions from './questions.json'

function Quiz() {
    let quiz_index = 0;
    let question_index = 0;
    return (
        <div className="mainpage question">
            <p>{Questions.quizes[quiz_index].questions[question_index].question}</p>
            {
                Questions.quizes[quiz_index].questions[question_index].answers.map((answer) => (
                    <Button className="mainpage-button button-yellow question-button" text={answer} />
                ))
            }
        </div>
    );
}

export default Quiz;