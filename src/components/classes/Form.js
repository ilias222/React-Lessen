// Импортируем библиотеку Реакт, класс компонент
import React, { Component } from 'react'

// Экспорт класса Форма, наследование от Компонентс
export class Form extends Component{

    state={
        name: 'Bibo',
        count: 0
    }

    handleChange(event){
        this.setState({ name: event.target.value})
    }

    handlClick = () => {
        this.setState({ count: this.state.count + 1})
    }

    render(){
        return(
            <>
            <h1>Classes component</h1>
            <h2>Name: {this.state.name}</h2>
            <input type="text" onChange={this.handleChange.bind(this)} />
            <p>Count: {this.state.count}</p>
            <button onClick={this.handlClick}>Click</button>
            <hr/>
            </>
        )
    }
}