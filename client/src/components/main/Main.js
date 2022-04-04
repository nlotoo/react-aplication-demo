import { Component } from 'react'

import '../main/Main.css'
import Post from './post/Post.js'


import { environment } from '../../environments/environment.dev'

import { useEffect, useState } from 'react'

const MainCommponent = () => {

    const [arrayData, setArray] = useState([]);

    useEffect(() => {
        fetch(`${environment.apiUrl}`)
            .then(res => res.json())
            .then(res => setArray(res))
            .catch(err => console.log('ERROR' + err))

    },[])



    return (
        <main className='main' >
            <h1>Posts</h1>
            {arrayData.map((rowWithPost, i) => {
                return <Post key={rowWithPost._id} post={rowWithPost}></Post>
            })
            }
        </main >

    )

}


export default MainCommponent




// class Main extends Component {
//     constructor(props) {
//         super(props)
//     }


//     // getData() {

//     //     this.props.data.then((data) => {
//     //         console.log(data)
//     //         return data
//     //     })
//     // }


//     render() {

//         return (
//             <main className='main' >




//                 <h1>Posts</h1>
//                 {this.getData().map((rowWithPost, i) => {
//                     return <Post key={rowWithPost._id} post={rowWithPost}></Post>
//                 })
//                 }

//             </main >
//         )
//     }
// }

// export default Main