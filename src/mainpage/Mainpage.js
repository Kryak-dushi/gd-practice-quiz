import Button from '../button/Button';
import '../mainpage/Mainpage.css';

function Mainpage() {
  return (
    <div className="mainpage">
      <img src={process.env.PUBLIC_URL + '/quiz.png'} className="mainpage__logo" alt="logo" />
      <div className="mainpage__button-container">
        <Button className="button button_red" text='НАЧАТЬ' onClick={() => { window.location.assign('http://localhost:3000/quiz') }} />
        <Button className="button button_yellow" text='ИСТОРИЯ' onClick={() => { window.location.assign('http://localhost:3000/history') }} />
      </div>
    </div>
  );
}

export default Mainpage;
