import { Component } from "react";

import AsideItem from './AsideItem/AsideItem.js'
import '../aside/Aside.css'

class Aside extends Component {
    constructor(props) {
        super(props)
    }



    render() {

        let AsideItemArray = []
        for (let i = 1; i < 12; i++) {
            AsideItemArray.push(<AsideItem><li className="aside-list-item "><a>Going to {i}</a> </li></AsideItem>)
        }

        return (
            <aside class='aside-class container'>
                <ul>
                    {AsideItemArray.map(asideRow => asideRow)}
                </ul>
            </aside>
        )
    }


}

export default Aside;