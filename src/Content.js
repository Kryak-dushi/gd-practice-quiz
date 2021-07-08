import Button from './Button'
import './Mainpage.css';

function Content() {
    function goToQuiz() {
        window.location.assign('http://localhost:3000/quiz/');
    }

    function goToHistory() {
        window.location.assign('http://localhost:3000/history/');
    }

    return (
        <div className="mainpage-button-container">
            <Button className="mainpage-button button-red" text='START' onClick={goToQuiz} />
            <Button className="mainpage-button button-yellow" text='HISTORY' onClick={goToHistory} />
        </div>
    );
}

export default Content;
