import Mainpage from '../mainpage/Mainpage'
import Quiz from '../quiz/Quiz'
import Result from '../result/Result'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" component={Mainpage} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
