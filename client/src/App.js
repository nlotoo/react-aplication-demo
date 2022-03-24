import './App.css';
import './components/heading/Header.css';
import './components/aside/Aside.css';



import Header from './components/heading/Header';
import Aside from './components/aside/Aside.js';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <Aside></Aside>
        <Main></Main>
      </div>
      <Footer />

    </div>





  );
}

export default App;
