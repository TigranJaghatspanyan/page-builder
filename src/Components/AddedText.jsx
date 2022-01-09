import React, { Component } from 'react'
import "./addingText.scss"
export default class AddedText extends Component {
    headingType = (e) =>{
        if(e.size === "h1"){
            return <h1 style={{color:e.color}}>{e.text}</h1>
        }
        else if(e.size === "h2"){
            return <h2 style={{color:e.color}}>{e.text}</h2>
        }
        else if(e.size === "h3"){
            return <h3 style={{color:e.color}}>{e.text}</h3>
        }
        else if(e.size === "h4"){
            return <h4 style={{color:e.color}}>{e.text}</h4>
        }
        else if(e.size === "h5"){
            return <h5 style={{color:e.color}}>{e.text}</h5>
        }
        else if(e.size === "h6"){
            return <h6 style={{color:e.color}}>{e.text}</h6>
        }
        else {
            return <p style={{color:e.color}}>{e.text}</p>
        }
    }
    render() {
        return (
            <div className='added'>
                <h1>Adding Text</h1>
                {this.props.array.map((e)=>{
                    return(
                        <div className='text'>
                            
                            {this.headingType(e)}
                        </div>
                    )
                })}
            </div>
        )
    }
}
