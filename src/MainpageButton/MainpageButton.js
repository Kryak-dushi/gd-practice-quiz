import Button from '../button/Button'
import '../button/Button.css';

function MainpageButton() {
    function goToMainpage() {
        window.location.assign('http://localhost:3000/index');
    }

    return (
        <Button className="button button_red" text='ГЛАВНАЯ' onClick={goToMainpage} />
    );
}

export default MainpageButton;