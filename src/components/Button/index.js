import React, { Component } from 'react'

import './button.css'

export default class Button extends Component {
    render(props) {
        return (
            <button onClick={ this.props.newJoke } className="btn">New Joke</button>
        )
    }
}