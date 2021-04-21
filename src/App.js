import { useEffect, useReducer } from 'react';
import './App.css';
import { AuthContext } from './context';
import { authReducer } from './reducer';
import AppRouter from './routers/AppRouter'

const init = () => {
  return JSON.parse(sessionStorage.getItem('user')) || { logged: false };
}

function App() {

  const [user, dispatch] = useReducer(authReducer,{}, init);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user])
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
