import './App.css';
import './components/heading/Header.css';
import './components/aside/Aside.css';

import { getAll } from './services/service.js'



import Header from './components/heading/Header';
import Aside from './components/aside/Aside.js';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import About from './components/About/About';
import Contact from './components/Contact us/Contact.js'


import { Component } from 'react';


import { Route, Routes, Router } from 'react-router-dom';


import { environment } from './environments/environment.dev.js'





function App() {




  return (
    <div>
      <Header />
      <div className='container'>
        <Aside />


        <Routes>

          <Route path='/' element={<Main />} ></Route>
          <Route path='/about' element={<About />}  ></Route>
          <Route path='/contact-us' element={<Contact />} ></Route>

        </Routes>
      </div>
      <Footer />

    </div>

  );
}


// class App extends Component {
//   constructor(props) {
//     super(props)


//     this.state = { posts: [] }
//   }

//   componentDidMount() {
//     getAll().then((posts) => {
//       return this.setState({ posts })
//     })
//   }


//   render() {


//     return (

//       <div>
//         <Header />
//         <div className='container'>
//           <Aside />


//           <Main data={this.state.posts} />
//         </div>
//         <Footer />

//       </div>



//     );
//   }



// }

export default App;
