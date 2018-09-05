import React, { Component } from 'react'
import { ImageTitleText } from '../ImageTitleText'

import './chuck-norris-avatar.css'

import ChuckNorrisPhoto from '../../assets/images/chuck-norris-1.png'

export default class ChuckNorrisAvatar extends Component {
    render() {
        return (
            <figure className="chuck-norris-avatar">
                <img className="chuck-norris-avatar__image" src={ ChuckNorrisPhoto } alt="Chuck Norris" title={ ImageTitleText() } />
            </figure>
        )
    }
}