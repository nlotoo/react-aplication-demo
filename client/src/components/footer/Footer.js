import { Component } from "react";

import '../footer/Footer.css'


class Footer extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <footer className="footer-class">
                 <ul>
                     <li className="listItem"><a href="">Going to 1</a></li>
                     <li className="listItem"><a href="">Going to 2</a></li>
                     <li className="listItem"><a href="">Going to 3</a></li>
                     <li className="listItem"><a href="">Going to 4</a></li>
                     <li className="listItem"><a href="">Going to 5</a></li>
                     <li className="listItem"><a href="">Going to 6</a></li>
                     <li className="listItem"><a href="">Going to 7</a></li>
                     <li className="listItem"><a href="">Going to 8</a></li>
                     <li className="listItem"><a href="">Going to 9</a></li>
                     <li className="listItem"><a href="">Going to 10</a></li>
                     <li className="listItem"><a href="">Going to 11</a></li>
                     <img src="blue-origami-bird-flipped.png" alt='Origami bird' width='100px'></img> 
                 </ul>
                <p>Yordan Nikolov &copy;</p>
            </footer>
        )

    }
}



export default Footer