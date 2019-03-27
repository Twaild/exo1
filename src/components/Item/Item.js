import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        // Pas besoin des parenthèses lorsque ton JSX n'est que sur une ligne
        return <button className="btn btn-outline-light btn-lg">{this.props.text}</button>;
    }
}
Item.propTypes = {};

export default Item;