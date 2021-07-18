import Button from './Button';
import './Mainpage.css';
import './Quiz.css';

function Result() {
    function goToMainpage() {
        window.location.assign('http://localhost:3000/index');
    }

    function goToHistory() {
        window.location.assign('http://localhost:3000/history');
    }

    return (
        <div className="mainpage question">
            <p> Заглушка. Вы набрали 5 баллов из 10</p>
            <div className="mainpage-button-container">
                <Button className="mainpage-button button-red" text='HOME' onClick={goToMainpage} />
                <Button className="mainpage-button button-yellow" text='HISTORY' onClick={goToHistory} />
            </div>
        </div>

    );
}

export default Result;
