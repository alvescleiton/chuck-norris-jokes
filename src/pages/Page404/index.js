import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Page404.css'

export default class Page404 extends Component {
    render() {
        return(
            <div className="page-404">
                <h1 className="page-404__title">Página não encontrada</h1>
                <Link to="/">Voltar</Link>
            </div>
        )
    }
}