import QuizButton from '../QuizButton/QuizButton';
import HistoryButton from '../HistoryButton/HistoryButton';
import '../mainpage/Mainpage.css';

function Mainpage() {
  return (
    <div className="mainpage">
      <img src={process.env.PUBLIC_URL + '/quiz.png'} className="mainpage__logo" alt="logo" />
      <div className="mainpage__button-container">
        <QuizButton />
        <HistoryButton />
      </div>
    </div>
  );
}

export default Mainpage;
