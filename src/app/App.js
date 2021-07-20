import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Mainpage from '../mainpage/Mainpage'
import Quiz from '../quiz/Quiz'
import Result from '../result/Result'
import History from '../history/History';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" component={Mainpage} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/result" component={Result} />
        <Route path="/history" component={History} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
