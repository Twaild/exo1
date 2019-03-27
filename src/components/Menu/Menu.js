import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

renderListButton(value){
    return (
        <Item text={value} key={value} />
    )

}
    render() {
    const tab = ['Accueil', 'Portfolio', 'Contact', 'Mentions légales', '+1']
    if(tab.length > 4 )
        return (
            <div>
                {tab.map(value => this.renderListButton(value))}
                {console.log(tab.length)}
            </div>
        );
    else{
        return (
            <div>Il y a rien !</div>
        )
    }
    }
}
Menu.propTypes = {};

export default Menu;