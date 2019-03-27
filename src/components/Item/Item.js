import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <button className="btn btn-outline-light btn-lg">{this.props.text}</button>
        );
    }
}
Item.propTypes = {};

export default Item;