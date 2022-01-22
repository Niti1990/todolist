import './App.css';
import './components/Header/Header.css';
import Header from './components/Header/Header';
import List from './components/list/List';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

const tododata = [{
  id: '101',
  title: 'shopping',
  done:'true',

},
{
  id: '103',
  title: 'sleeping',
  done:'true',

},
{
  id: '106',
  title: 'grocery',
  done:'true',

}
]


function App() {


  return (
    <div className="App">
        <Header/>
      <header className="App-header">
      <Form/>
      <List todos={tododata} />

      </header>

      <Footer/>


    </div>
  );
}

export default App;