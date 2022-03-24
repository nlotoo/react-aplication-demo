import { Component } from 'react'

import { environment } from '../../environments/environment.dev'
import '../main/Main.css'
import Post from './post/Post.js'


class Main extends Component {
    constructor(props,) {
        super(props)
    }



    render() {
        return (
            <main className='main' >
                <h1>Posts</h1>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </main>
        )
    }
}

export default Main