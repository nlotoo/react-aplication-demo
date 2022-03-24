import { Component } from "react"
import NavigationItem from './navigationItem/NavigationItem.js'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        let NavigationItemArray = [];
        for (let i = 1; i < 12; i++) {
            NavigationItemArray.push(<NavigationItem key={+i} >Going to {i}</NavigationItem>)
        }
        return (

            <nav className="navigation" >
                <ul >
                    <h1 className="listItem"><img src="/white-origami-bird.png" alt="white-origami" height="105px" /></h1>
                    {NavigationItemArray.map(navigationItemRow => navigationItemRow)}
                </ul>
            </nav>

        )
    }


}


export default Header