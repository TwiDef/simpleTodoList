import React, { Component } from "react";
import TodoItems from "./TodoItems";
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        let itemArray = this.state.items

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            })
        }
        this._inputElement.value = ""

        this.setState({
            items: itemArray
        })

        console.log(itemArray)
        e.preventDefault()
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        })
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="введите задачу" ref={(a) => this._inputElement = a} />
                        <button type="submit">Добавить</button>
                    </form>
                </div>
                <TodoItems
                    entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        )
    }
}

export default TodoList