import logo from './logo.svg';
import './App.css';
import {Provider as AuthProvider} from './context/AuthContext';
import {Provider as ApiProvider} from './context/ApiContext';
import Main from './neutral/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <AuthProvider>
      <ApiProvider>
        <div className="App">
          <Main />
        </div>
      </ApiProvider>
    </AuthProvider>
  );
}

export default App;
