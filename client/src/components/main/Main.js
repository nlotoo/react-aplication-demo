import { Component } from 'react'

import '../main/Main.css'
import Post from './post/Post.js'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {


        return (
            <main className='main' >
                <h1>Posts</h1>
                {this.props.data.map((rowWithPost, i) => {
                    return <Post key={rowWithPost._id} post={rowWithPost}></Post>
                })
                }

            </main >
        )
    }
}

export default Main