import React, { Component, useState } from 'react';
import PortalUtil from '../../../shared/utils/PortalUtil';
import NavbarService from '../../../shared/service/NavbarService';
import './navbar-style.css';

export class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navItems: [],
            title: ""
        };
        PortalUtil.getEnterprise().then(result => {
            this.setState({
                title: result.name
            })
        })
    }

    render() {
        const { navItems } = this.state;        
        const { title } = this.state;
        return (
            <div>
                <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark" style={{ height: "8%" }}>
                    <a class="navbar-brand" href="#">{ title }</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            {navItems}
                        </ul>

                        <ul class="navbar-nav">
                            <li class="nav-item dropdown" key="01">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Usuários
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Configurar usuário</a>
                                    <a class="dropdown-item" href="/home/users">
                                        Visualizar usuários
                                    </a>
                                </div>
                            </li>
                        </ul>


                    </div >
                </nav >

            </div >
        );
    }


    renderItems = async function () {
        const nav = await new NavbarService().get().then(result => {
            return result.data.fields.map(item => {
                if (item.fields) {
                    // é dropdown
                    return this.renderDropdownItem(item);
                    //return null;
                } else {
                    // é navitem comum
                    return this.renderItem(item);
                    //return undefined;
                }

            });
        });
        this.setState({ navItems: nav });
    }

    renderItem = function (item) {
        let navItemRendered;
        navItemRendered = (
            <li class="nav-item" key={item.order}>
                <a class="nav-link" href={item.link}>
                    <i class={item.icon}></i>
                    {item.title}
                </a>
            </li >
        )
        // if(isFirst){
        //     navItemRendered = navItemRendered + (<span class="sr-only">(current)</span>);
        // }
        return navItemRendered;
    }

    renderDropdownItem = function (item) {
        return (
            <li class="nav-item dropdown" key={item.order}>
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">
                    <i class={item.icon}>
                        <span class="badge badge-primary"></span>
                    </i>
                    {item.title}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {this.renderSubItems(item)}
                </div>
            </li >
        );
    }

    renderSubItems = function (item) {
        return item.fields.map((subItem => (
            <a class="dropdown-item" href={subItem.link} key={subItem.order}>
                {subItem.title}
            </a>
        )));
    }

    componentDidMount() {
        this.renderItems();
    }

}