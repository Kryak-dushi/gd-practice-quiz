import logo from './quiz.png';
import Content from './Content'
import './Mainpage.css';

function Mainpage() {
  return (
    <div className="mainpage">
      <img src={logo} className="mainpage-logo" alt="logo" />
      <Content />
    </div>
  );
}

export default Mainpage;
