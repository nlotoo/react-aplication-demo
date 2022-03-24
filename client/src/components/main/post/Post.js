import { Component } from "react";


class Post extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="main-posts-container">
                <img src="blue-origami-bird.png"></img>
                <p className="description">
                    {this.props.post.post}
                </p>
                <div>
                    <span>
                        <small>Author:</small>
                        {this.props.post.author}
                    </span>
                </div>
            </div>
        )
    }

}


export default Post