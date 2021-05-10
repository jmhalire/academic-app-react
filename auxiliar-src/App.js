import { useReducer, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './routers/AppRouter';
import { AuthContext } from './context/index';
import { authReducer } from './reducer/index';

const init = () => {
  return JSON.parse(sessionStorage.getItem('user')) || { logged: false };
}

function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <div className="image"></div>
      <div className="main">
        <Router>
          <AppRouter />
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
