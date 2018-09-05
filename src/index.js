import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import './assets/css/reset.css'
import './assets/css/base.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.getElementById('root'))
registerServiceWorker();

