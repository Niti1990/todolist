import logo from './logo.svg';
import './App.css';
import './components/Header/Header.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        
       
        <Header/>
        <Main/>
       
      </header>
      <Footer/>
    </div>
  );
}

export default App;
