import React, { Component } from 'react'
import Adding from './Adding.jsx'

export default class Main extends Component {
    
    render() {
        return (
            <div className='texts'>
                <Adding addText={this.props.addText}/>
            </div>
        )
    }
}
