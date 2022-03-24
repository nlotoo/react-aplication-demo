import { Component } from "react";


class ListItem extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
       
            <li  className="listItem" ><a href="">{this.props.children}</a></li>

        )
    }

}




export default ListItem