import { Component } from "react";
import '../AsideItem/AsideItem.css'

class AsideItem extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        
        return (
            
            <li className="aside-list-item" ><a href="" >{this.props.children}</a></li>
            )
    }
}

export default AsideItem