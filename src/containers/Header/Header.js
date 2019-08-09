import React, { Component } from 'react'
import classes from './Header.css';
import MenuIcon from './../../components/UI/MenuIcon/MenuIcon';
import Logo from './../../components/UI/Logo/Logo';
import Nav from './../../components/Navigation/Nav';
import Sidenav from './../../components/Sidenav/Sidenav';
import Auxi from './../../hoc/Auxi/Auxi';

class Header extends Component {
    state = {
        show: false
    }
    handleSideNav = () => {
        //smart way of chaning state
        this.setState((prevState) => {
            return { show: !prevState.show }
        })
    }
    render() {
        return (
            <Auxi>
                <Sidenav
                    click={this.handleSideNav}
                    show={this.state.show} />

                <div className={classes.Header}>
                    <MenuIcon
                        click={this.handleSideNav}
                        show={this.state.show} />
                    <Logo />
                    <Nav />
                </div>
            </Auxi>
        )
    }
}

export default Header;
