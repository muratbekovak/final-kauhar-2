import { useSelector } from 'react-redux';
import LoginForm from './views/LoginForm';
import LoggedInView from './views/LoggedInView';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? <LoggedInView /> : <LoginForm />;
}

export default App;
