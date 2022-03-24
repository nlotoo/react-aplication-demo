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
            AsideItemArray.push(<AsideItem key={i}>Going to {i}</AsideItem>)
        }

        return (

            <aside className='aside-class'>
  

                    <ul>
                        {AsideItemArray.map(asideRow => asideRow)}
                    </ul>
            
            </aside>
        )
    }


}

export default Aside;