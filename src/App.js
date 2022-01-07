import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const removeBodyClasess = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClasess();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#040d1a';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", 'success');
      // document.title = "RENY - DARK";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#040d1a';
      showAlert("light mode has been enabled", 'success');
      // document.title = "RENY - LIGHT";

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route exact path="/about">
              <About mode={mode} toggleMode={toggleMode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try Textutils:-  Word Counter | Character Counter |Remove Spaces | " mode={mode} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
