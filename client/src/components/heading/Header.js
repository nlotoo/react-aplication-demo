import { Component } from "react"
import { Link } from "react-router-dom"
import NavigationItem from './navigationItem/NavigationItem.js'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        let NavigationItemArray = [];
        for (let i = 1; i < 10; i++) {
            NavigationItemArray.push(<NavigationItem key={+i} >Going to {i}</NavigationItem>)
        }
        return (

            <nav className="navigation" >
                <ul >

                    <h1 className="listItem"><img src="/white-origami-bird.png" alt="white-origami" height="105px" /></h1>
                    <NavigationItem key='00' ><Link to='/' >Home</Link></NavigationItem>
                    <NavigationItem key='01' ><Link to='/contact-us'> Contact</Link></NavigationItem>
                    <NavigationItem key='02' ><Link to='/about' >About</Link></NavigationItem>

                    {NavigationItemArray.map(navigationItemRow => navigationItemRow)}
                </ul>
            </nav>

        )
    }


}


export default Header