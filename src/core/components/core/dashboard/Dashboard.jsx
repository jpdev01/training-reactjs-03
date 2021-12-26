import React, { Component, useState } from 'react';
import { NavbarComponent} from '../navbar/NavbarComponent';

export default class Dasahboard extends Component {

    render() {
        const { children } = this.props;
        const { match } = this.props;
        console.log(children);

        return (
            <div>
                <NavbarComponent></NavbarComponent>
            </div>
        );
    }
}

