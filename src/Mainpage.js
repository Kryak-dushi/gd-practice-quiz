import logo from './quiz.png';
import './Mainpage.css';

function Mainpage() {
  return (
    <div className="mainpage">
      <img src={logo} className="mainpage-logo" alt="logo" />
      <div className="mainpage-button-container">
        <button className="mainpage-button button-red">START</button>
        <button className="mainpage-button button-yellow">HISTORY</button>
      </div>
    </div>
  );
}

export default Mainpage;
