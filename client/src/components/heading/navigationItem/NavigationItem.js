import { Component } from "react";

import { Link } from 'react-router-dom'

class ListItem extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <li className="listItem" >{this.props.children}</li>
        )
    }

}




export default ListItem