import './App.css';
import './components/Header/Header.css';
import Header from './components/Header/Header';
import List from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <Form/>
        <List/>
      </header>
      
      <Footer/>
    </div>
  );
}

export default App;
