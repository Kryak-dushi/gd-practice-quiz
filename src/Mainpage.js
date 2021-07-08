import Content from './Content'
import './Mainpage.css';

function Mainpage() {
  return (
    <div className="mainpage">
      <img src={process.env.PUBLIC_URL+'/quiz.png'} className="mainpage-logo" alt="logo" />
      <Content />
    </div>
  );
}

export default Mainpage;
