import React, { Component } from "react";
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this)
    }

    createTasks(item) {
        return <li onDoubleClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key)
    }

    render() {
        console.log(this.props.entries)

        return (
            <ul className="theList">
                <FlipMove duration={200} easing="ease-out">
                    {this.props.entries.map(this.createTasks)}
                </FlipMove>
            </ul>
        )
    }
}

export default TodoItems