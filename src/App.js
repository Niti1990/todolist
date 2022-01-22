import './App.css';
import './components/Header/Header.css';
import Header from './components/Header/Header';
import List from './components/list/List';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';


function App() {
const tododata = {
  id: '101',
  title: 'shopping',
  done:'true',

}

  return (
    <div className="App">
        <Header/>
      <header className="App-header">
      <Form/>
      <List id={tododata.id} title={tododata.title} done={tododata.done} />
       
      </header>
     
      <Footer/>
      
    
    </div>
  );
}

export default App;
