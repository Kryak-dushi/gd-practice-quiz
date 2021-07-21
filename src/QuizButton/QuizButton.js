import Button from '../button/Button'
import '../button/Button.css';

function QuizButton() {
    function goToQuiz() {
        window.location.assign('http://localhost:3000/quiz');
    }

    return (
        <Button className="button button_red" text='НАЧАТЬ' onClick={goToQuiz} />
    );
}

export default QuizButton;