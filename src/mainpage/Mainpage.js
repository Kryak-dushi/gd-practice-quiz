import Content from '../content/Content'
import '../mainpage/Mainpage.css';

function Mainpage() {
  return (
    <div className="mainpage">
      <img src={process.env.PUBLIC_URL + '/quiz.png'} className="mainpage__logo" alt="logo" />
      <Content />
    </div>
  );
}

export default Mainpage;
