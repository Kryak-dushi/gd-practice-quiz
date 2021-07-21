import Button from '../button/Button'
import '../button/Button.css';

function HistoryButton() {
    function goToHistory() {
        window.location.assign('http://localhost:3000/history');
    }

    return (
        <Button className="button button_yellow" text='ИСТОРИЯ' onClick={goToHistory} />
    );
}

export default HistoryButton;