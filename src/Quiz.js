import './Quiz.css';
import './Mainpage.css';
import Button from './Button';
import Questions from './questions.json'

function Quiz() {
    let index = 0;
    return (
        <div className="mainpage question">
            <p>{Questions.quizes[index].questions[index].question}</p>
            <Button className="mainpage-button button-yellow question-button" text={Questions.quizes[index].questions[index].answers[0]} />
            <Button className="mainpage-button button-yellow question-button" text={Questions.quizes[index].questions[index].answers[1]} />
            <Button className="mainpage-button button-yellow question-button" text={Questions.quizes[index].questions[index].answers[2]} />
            <Button className="mainpage-button button-yellow question-button" text={Questions.quizes[index].questions[index].answers[3]} />
        </div>
    );
}

export default Quiz;