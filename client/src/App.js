import './App.css';
import './components/heading/Header.css';
import './components/aside/Aside.css';

import Demo from './components/demo-folder/Demo.js'

import Header from './components/heading/Header';
import Aside from './components/aside/Aside.js';
import Main from './components/main/Main';

function App() {
  return (
    <div>



      <Header></Header>
      <div className='container'>
      <Aside></Aside>
      <Main></Main>
      </div>

    </div>





  );
}

export default App;
