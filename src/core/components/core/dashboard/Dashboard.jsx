import React, { Component, useState } from 'react';
import { NavbarComponent} from '../navbar/NavbarComponent';

class Dasahboard extends Component {

    render() {
        const { children } = this.props;
        const { match } = this.props;
        console.log(children);
        //this.initMain();
        console.log(this.props);
        return (
            <div>
                <NavbarComponent></NavbarComponent>
            </div>
        );
    }
}


export default Dasahboard;