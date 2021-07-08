import Button from './Button'
import './Mainpage.css';

function Content() {
    //goToQuiz =()=>{} onClick={goToQuiz}
    return (
        <div className="mainpage-button-container">
            <Button className="mainpage-button button-red" text='START' />
            <Button className="mainpage-button button-yellow" text='HISTORY' />
        </div>
    );
}

export default Content;
