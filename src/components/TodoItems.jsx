import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        console.log(this.props.entries)

        /* const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks) */

        return (
            <ul className="theList">
                {this.props.entries.map(this.createTasks)}
            </ul>
        )
    }
}

export default TodoItems