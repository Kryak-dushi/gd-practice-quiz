import Mainpage from './Mainpage'
import Quiz from './Quiz'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>        
        <Route path="/index" component={Mainpage} />
        <Route path="/quiz" component={Quiz} />
    </BrowserRouter>
  );
}

export default App;
