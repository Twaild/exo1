import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

renderListButton(value){
    // Pas besoin des parenthèses lorsque ton JSX n'est que sur une ligne
    return <Item text={value} key={value} />;

}
    render() {
    const tab = ['Accueil', 'Portfolio', 'Contact', 'Mentions légales', '+1']
    if(tab.length > 4 )
        return (
            <div>
                {/* Version plus courte qui fait exactement la même chose */}
                {tab.map(this.renderListButton)}
                {console.log(tab.length)}
            </div>
        );
    else{
        // Pas besoin des parenthèses lorsque ton JSX n'est que sur une ligne
        return <div>Il y a rien !</div>
    }
    }
}
Menu.propTypes = {};

export default Menu;