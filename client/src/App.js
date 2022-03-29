import './App.css';
import './components/heading/Header.css';
import './components/aside/Aside.css';

import { getAll } from './components/services/service.js'



import Header from './components/heading/Header';
import Aside from './components/aside/Aside.js';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import About from './components/About/about';


import { Component } from 'react';


import { Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  let data;

  data = getAll()


  return (
    <div>
      <Header></Header>
      <div className='container'>
        <Aside></Aside>
        <Main data={data}></Main>
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
//         <Header></Header>
//         <div className='container'>
//           <Aside></Aside>
//           <Main data={this.state.posts}></Main>






//         </div>
//         <Footer />

//       </div>

//     );
//   }



// }

export default App;
