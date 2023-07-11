import './App.css';
import { Route, Router } from 'react-router-dom';
import ProfileScreen from './board/ProfileScreen';
import Board from './board/Board';


function App() {
  return (
    <div>
      <ProfileScreen />
      {/* <Router>
        <Route path="/" component={Board}></Route>
        <Route path="/profile" component={ProfileScreen}></Route>
      </Router> */}
    </div>
  );
}

export default App;
