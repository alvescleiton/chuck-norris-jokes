import React, { Component } from 'react'

import './loading.css'

export default class Loading extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={`loading ${this.props.loading}`}>
                <div className="loading__lds-dual-ring"></div>
            </div>
        )
    }
}