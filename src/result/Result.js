import Button from '../button/Button';
import '../mainpage/Mainpage.css';
import '../quiz/Quiz.css';
import '../content/Content.css';
import '../button/Button.css'

function Result({ correct_answers }) {
    function goToMainpage() {
        window.location.assign('http://localhost:3000/index');
    }

    function goToHistory() {
        window.location.assign('http://localhost:3000/history');
    }

    function scoreText() {
        if (correct_answers === 1) return 'балл'
        else if (correct_answers > 1 && correct_answers < 5) return 'балла'
        else return 'баллов'
    }

    return (
        <div className="mainpage quiz">
            <p>Вы набрали {correct_answers} {scoreText()} из 10</p>
            <div className="content__button-container">
                <Button className="button button_red" text='Главная' onClick={goToMainpage} />
                <Button className="button button_yellow" text='История' onClick={goToHistory} />
            </div>
        </div>
    );
}

export default Result;
