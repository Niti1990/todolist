import logo from './logo.svg';
import './App.css';
import './components/Header/Header.css';
import Header from './components/Header/Header';
import Main from './components/list/List';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';


function App() {
  return (
    <div className="App">
        <Header/>
      <header className="App-header">
      <Form/>
        <Main/>
       
      </header>
     
      <Footer/>
    
    </div>
  );
}

export default App;
