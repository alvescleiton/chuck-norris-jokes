import React, { Component } from 'react'

import './phrases.css'

export default class Phrases extends Component {
    render() {
        return ( 
            <div className="chuck-norris-phrase">
                <p className="chuck-norris-phrase__text">
                    { this.props.phrase.length > 0 ? this.props.phrase : 'Finding a joke...' }
                </p>
            </div>
        )
    }
}