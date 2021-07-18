import Mainpage from './Mainpage'
import Quiz from './Quiz'
import Result from './Result'
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
