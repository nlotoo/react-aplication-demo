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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, expedita reprehenderit tempore ipsam tempora rerum quod magni sint qui maiores.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est, saepe,
                    nostrum fugiat minima porro excepturi dolorem non laudantium adipisci pariatur!
                    Unde atque maiores cum obcaecati ipsa placeat id quidem illo, sapiente consequuntur
                    est dolor dicta illum, ab optio minima architecto sequi numquam magni fuga ratione
                    quibusdam odio quae! Aperiam repudiandae autem eius tempore dolorum. Eligendi nulla
                    quibusdam delectus similique ipsa praesentium blanditiis, error non cumque nemo
                    accusamus placeat, doloribus omnis voluptates corporis assumenda voluptas reiciendis
                    voluptatum aliquam. Minima quidem non, a tenetur odio dolores accusamus soluta ea dignissimos
                    repellendus incidunt totam consectetur beatae rem fugiat voluptate ad nemo et.
                </p>
                <div>
                    <span>
                        <small>Author:</small>
                        Some Author
                    </span>
                </div>
            </div>
        )
    }

}


export default Post