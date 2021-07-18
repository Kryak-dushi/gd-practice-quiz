import Mainpage from './Mainpage'
import Quiz from './Quiz'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" component={Mainpage} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
