import Button from '../button/Button'
import './Content.css'
import '../button/Button.css';

function Content() {
    function goToQuiz() {
        window.location.assign('http://localhost:3000/quiz');
    }

    function goToHistory() {
        window.location.assign('http://localhost:3000/history');
    }

    return (
        <div className="content__button-container">
            <Button className="button button_red" text='НАЧАТЬ' onClick={goToQuiz} />
            <Button className="button button_yellow" text='ИСТОРИЯ' onClick={goToHistory} />
        </div>
    );
}

export default Content;
