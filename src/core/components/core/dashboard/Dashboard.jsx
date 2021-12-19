import React, { Component, useState } from 'react';
import { NavbarComponent} from '../navbar/NavbarComponent';
import InsertRecords from '../record/insert/InsertRecord';
import { Switch, Route } from "react-router-dom";

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

    // initMain = () => {
    //     ReactDOM.render(
    //         <Main></Main>,
    //         document.getElementById('main')
    //     )
    // }
}

// const Dasahboard = React.createClass({
//     render() {
//       const { children } = this.props;
//       return (
//         <div>
//           {/* you can insert the menu here */}
//           {children}
//         </div>
//       );
//     }
//   });

export default Dasahboard;