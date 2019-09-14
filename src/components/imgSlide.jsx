import React, { Component } from 'react'

import img1 from "../assets/MrRobotS35.png"

export default class imgSlide extends Component {
    render() {
        return (
            <div className="slider">
                <img src={img1} alt=""/>
            </div>
        )
    }
}
