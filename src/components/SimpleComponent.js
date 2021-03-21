// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component{ 
    state = {mood: 'happy'}

    toggleMood=()=>{
        let newMood = this.state.mood
        newMood === 'happy'? newMood = 'sad': newMood='happy'
        this.setState({mood: newMood})
    }
    render() {return <div onClick = {this.toggleMood}>{this.state.mood}</div>}
}